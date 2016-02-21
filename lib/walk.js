/**
 * @author Branden Horiuchi <bhoriuchi@gmail.com>
 * 
 * @description
 * An implementation of walk using promises
 * 
 * 
 */
var _       = require('lodash');
var promise = require('bluebird');
var fs      = require('fs');
var path    = require('path');
promise.promisifyAll(fs);

// recursive function to walk directories
function walk(options) {
	
	return function(currentPath) {
		return fs.statAsync(currentPath).then(function(stat) {
			if (stat.isFile()) {
				
				// create a file object
				var file = {
					root: path.resolve(path.dirname(currentPath)),
					name: path.basename(currentPath),
					stat: stat
				};
				
				// return the file
				return file;
			}
			else if (stat.isDirectory()) {
				return fs.readdirAsync(currentPath).map(function(fileName) {
					
					// get the new path
					var newPath = path.join(currentPath, fileName);
					
					// check if the new path exists in the ignore
					if (!Array.isArray(options.ignore) || !_.includes(options.ignore, newPath)) {
						return walk(options)(newPath);	
					}
				})
				.reduce(function(a, b) {
					return a.concat(b);
				}, []);
			}
		})
		.caught(function () {
			return null;
		});	
	};
}


/**
 * @param {(string|string[])} path - path or array of paths
 * @param {Object} [options] - Options hash
 * @param {string[]} [ignore] - array of paths to ignore
 */
module.exports = function(path, options) {
	
	// set the path as an array if it is not one
	path = Array.isArray(path) ? path : [path];
	
	// set options
	options = options || {};
	
	return promise.map(path, walk(options)).reduce(function(a, b) {
		return a.concat(b);
	}, [])
	.then(function(files) {
		return _.without(files, undefined);
	});
};
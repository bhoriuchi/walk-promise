
var walk = require('../lib/walk');


walk(['./dir1', '../lib'], {ignore: ['dir1/dir2']}).then(function(files) {
	console.log(files);
});

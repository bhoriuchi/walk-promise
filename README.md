# ☎ walk-promise
---

Recursively find files from a list of paths using promises and return them along with file information. This allows you to easily integrate walk functionality into a project that is already using promises

* See the [`WIKI`](https://github.com/bhoriuchi/walk-promise/wiki) for full documentation
* And the [`Change Log`](https://github.com/bhoriuchi/walk-promise/wiki/Change-Log) for what's new!

---

### Documentation

##### walk(`path`, [`options`])
Walks one or more directories and returns information on the files in those directories

**`Parameters`**
* **`path`** `{string | string[]}` - path or array of paths to start walk from
* **[`options`]** `{Object}` - Options hash
  * **[`ignore`]** `{string[]}` - Paths to ignore

**`Returns`** `{Promise}` - Returns a Promise that resolves to an array of file information objects

---

### Output

Output is in for form of an array of file info objects. File info objects are composed of the following

`root` - The full path to the file
`name` - The file name
`stat` - The file stat object for the file


##### Examples
```js
var walk = require('walk-promise');

// single path
walk('/home/user/documents').then(function(files) {
	console.log(files);
});

// multiple paths
walk(['../lib', '/home/user/documents']).then(function(files) {
	console.log(files);
});

// multiple paths with ignore
walk(['../lib', '/home/user/documents'], {
    ignore: ['/home/user/documents/private']
})
.then(function(files) {
	console.log(files);
});

```
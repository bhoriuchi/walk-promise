# ☯ walk-promise
| <h4>❁ Overview</h4> |
| :--- |
| <br>Recursively find files from a list of paths.<br><br> |
| <h4>❁ Documentation</h4> |
| <ul><li>See the [`WIKI`](https://github.com/bhoriuchi/walk-promise/wiki) for full documentation</li><li>And the [`Change Log`](https://github.com/bhoriuchi/walk-promise/wiki/Change-Log) for what's new!</li></ul> |
| <h4>❁ Install</h4> |
| <pre>npm install -g walk-promise</pre> |
| <h4>❁ Examples</h4> |
```js
var walk = require('walk-promise');

walk(['../lib', '/home/user/documents']).then(function(files) {
	console.log(files);
});
```
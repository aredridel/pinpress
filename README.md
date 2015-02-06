pinpress
========

```
var pinpress = require('pinpress');

pinpress({
    "cdr": { "thing": "world", "after": "head" },
    "head": { "thing": "hello" }
});
```

Gives

```
[ { thing: 'hello' }, { after: 'head', thing: 'world' } ]
```

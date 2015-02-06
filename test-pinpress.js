"use strict";

var test = require('tape');

var pinpress = require('./pinpress');

test('it should work', function (t) {
    t.deepEqual(pinpress({
        "cdr": { "thing": "world", "after": "head" },
        "head": { "thing": "hello" }
    }), [ { "thing": "hello" }, { "thing": "world", "after": "head" } ]);
    t.end();
});

"use strict";

module.exports = function (obj) {
    var working = {};
    var indexes = {};
    var list = {};

    for (var k in obj) {
        working[k] = obj[k];
    }

    for (var l in working) {
        if (working[l].after) {
            if (working[working[l].after]) {
                list[working[l].after] = node(working[l].after, working[working[l].after]);
                delete working[working[l].after];
            }
            if (working[l].after in list) {
                list[working[l].after].next = node(l, working[l]);
                delete working[l];
            }

            if (working[l]) {
                throw new Error("Couldn't find parent for " + l);
            }
        } else {
            list[l] = node(l, working[l]);
        }
        delete working[l];
    }

    if (Object.keys(list).length > 1) {
        throw new Error("Could not connect some keys in a chain. Remaining: " + Object.keys(list).join(", "));
    }

    var head = list[Object.keys(list)[0]];

    if (!head) {
        return [];
    }

    var out = [];

    while (head) {
        out.push(head.value);
        head = head.next;
    }

    return out;
};

function node(name, value) {
    return { name: name, value: value };
}

"use strict";
var _Testowa_ukryte;
const add = (a, b) => {
    return a + b;
};
add(1, 2);
// add(1, '2')
// add({}, '2')
class Testowa {
    constructor() {
        _Testowa_ukryte.set(this, 123);
    }
    static statyczna() {
        throw ' blad!';
    }
}
_Testowa_ukryte = new WeakMap();
Testowa.statyczna();
//# sourceMappingURL=index.js.map
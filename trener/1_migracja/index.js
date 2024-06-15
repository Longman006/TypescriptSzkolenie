"use strict";
var _Testowa3_ukryte;
const add = (a, b) => {
    return a + b;
};
add(1, 2);
// add(1, '2')
// add({}, '2')
class Testowa3 {
    constructor() {
        _Testowa3_ukryte.set(this, 123);
    }
    static statyczna() {
        throw ' blad!';
    }
}
_Testowa3_ukryte = new WeakMap();

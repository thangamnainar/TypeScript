"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hi.. welcome from tn';
// console.log(message);
var a = 123;
a = 1;
a = 'str';
var b = 1.2;
b = 1;
var c = 'str';
var d = true;
var nul;
nul = null;
var array = [1, 2, 3, 4];
var arrstr = ['strig'];
// console.log(arrstr);
var multitype;
multitype = 11;
multitype = 'str';
var obj = {
    name: 'siva',
    age: 20
};
function sum(a, b) {
    return a + b;
}
;
// console.log(sum(2,4));
function changecase(a) {
    return a.toLowerCase();
}
;
function changecase2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
;
// console.log(changecase2('HII','siva'));
function defaultValue(a, b) {
    if (b === void 0) { b = 'siva'; }
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
;
// console.log(defaultValue('HII'));
function object(point) {
    return point.x + point.y;
}
;
var p = {
    x: 2,
    y: 4
};
console.log(object(p));
;
function object2(point) {
    return point.x + point.y;
}
;
var interfacevale = {
    x: 20,
    y: 20,
};
console.log(object2(interfacevale));

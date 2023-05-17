"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
;
function object2(point) {
    return point.x + point.y;
}
;
var interfacevale = {
    x: 20,
    y: 20,
};
// console.log(object2(interfacevale));
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}
// Usage examples:
// console.log(calculator(5, 3, '+')); // Output: 8
// console.log(calculator(10, 2, '-')); // Output: 8
// console.log(calculator(4, 2, '*')); // Output: 8
// console.log(calculator(10, 0, '/')); // Output: Error: Division by zero
// console.log(calculator(5, 3, '%')); // Output: Error: Invalid operator
// 16/05/2023
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello ," + this.greeting;
    };
    return Greeter;
}());
var gree = new Greeter('thangam');
//  console.log(gree.greet());
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    return car;
}());
var obje = new car('benz');
// console.log(obje.engine);
var car2 = /** @class */ (function () {
    function car2(engine) {
        this.engine = engine;
    }
    ;
    return car2;
}());
var ca2 = new car2('audi');
// console.log(ca2);
var car3 = /** @class */ (function () {
    function car3(engine) {
        this.engine = engine;
    }
    car3.prototype.start = function () {
        return "started " + this.engine;
    };
    car3.prototype.stop = function () {
        return "stopped " + this.engine;
    };
    return car3;
}());
// let ca3=new car3('audi');
// console.log(ca3.start());
// console.log(ca3.stop());
var car4 = /** @class */ (function () {
    function car4(engine) {
        // this._engine='iuytre'
        this.engine = engine;
        // console.log(this.engine);
    }
    Object.defineProperty(car4.prototype, "engine", {
        get: function () {
            console.log('inside get');
            return this._engine;
        },
        set: function (value) {
            console.log('inside set');
            // if (value == undefined) throw 'supply an engine!';
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    return car4;
}());
;
// let ca4=new car4('jhklkj');
// console.log(ca4.engine);
// ca4.engine='aaudi';
//...........
var Engine = /** @class */ (function () {
    function Engine(power, type) {
        this.power = power;
        this.type = type;
    }
    return Engine;
}());
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var ccar = /** @class */ (function () {
    // value:any;
    function ccar(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    ccar.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    ccar.prototype.getval = function () {
        console.log('somthing');
    };
    ccar.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return ccar;
}());
var ob = new ccar('benz');
ob.start('started');
ob.stop('stop');
ob.getval();

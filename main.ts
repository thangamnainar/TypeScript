export { };
let message = 'Hi.. welcome from tn';
// console.log(message);

let a: any = 123;
a = 1;
a = 'str';

let b: number = 1.2;
b = 1;

let c: string = 'str';

let d: boolean = true;

let nul: null;
nul = null;

let array = [1, 2, 3, 4];

let arrstr: string[] = ['strig'];
// console.log(arrstr);

let multitype: number | string;
multitype = 11;
multitype = 'str';

let obj = {
  name: 'siva',
  age: 20
};

function sum(a: number, b: number): number {
  return a + b
};
// console.log(sum(2,4));

function changecase(a) {
  return a.toLowerCase();
};

function changecase2(a: string, b?: string): string {
  if (b)
    return a.toLowerCase() + b;
  return a.toLowerCase();
};

// console.log(changecase2('HII','siva'));

function defaultValue(a: string, b: string = 'siva'): string {
  if (b)
    return a.toLowerCase() + b;
  return a.toLowerCase();
};

// console.log(defaultValue('HII'));

function object(point: { x: number, y: number }) {
  return point.x + point.y
};
let p = {
  x: 2,
  y: 4
};
// console.log(object(p));

interface point {
  x: number;
  y: number;
};
function object2(point: point) {
  return point.x + point.y;
};
let interfacevale: point = {
  x: 20,
  y: 20,
};
// console.log(object2(interfacevale));


function calculator(num1: number, num2: number, operator: string): number | string {
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

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello ," + this.greeting;
  }
}

let gree = new Greeter('thangam');
//  console.log(gree.greet());


class car {
  engine: string;
  constructor(engine: string) {
    this.engine = engine;
  }
}
let obje = new car('benz');
// console.log(obje.engine);

class car2 {
  constructor(public engine: string) { };
}
let ca2 = new car2('audi');
// console.log(ca2);


class car3 {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    return "started " + this.engine
  }

  stop() {
    return "stopped " + this.engine
  }

}
// let ca3=new car3('audi');
// console.log(ca3.start());
// console.log(ca3.stop());


class car4 {
  _engine: string;
  engine1: string;

  constructor(engine: string) {
    // this._engine='iuytre'
    this.engine = engine;
    // console.log(this.engine);

  }

  get engine(): string {
    console.log('inside get');
    return this._engine;
  }


  set engine(value: string) {
    console.log('inside set');
    // if (value == undefined) throw 'supply an engine!';
    this._engine = value;
  }

};



// let ca4=new car4('jhklkj');
// console.log(ca4.engine);
// ca4.engine='aaudi';

//...........

export class Engine {
  constructor(public power: number, public type: string) {
  }
}

class Auto {
  engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
}

class Truck extends Auto {
  fourByFour: boolean;
  constructor(engine: Engine, fourByFour: boolean) {
    super(engine);

    this.fourByFour = fourByFour;
  }
}


// let engine = new Engine(300,"ES6");
// let truk=new Truck(engine,true);
// console.log(truk.engine.power);
// console.log(truk.fourByFour);


// define interface..

interface val {
  getval();
}

interface action extends val {
  start(message: string);
  stop(message: string);
}

class ccar implements action {
  // value:any;
  constructor(public engine: string) {
    this.engine = engine;
  }

  start(message: string) {
    console.log(this.engine + message);

  }
  getval() {
    console.log('somthing');

  }
  stop(message: string) {
    console.log(this.engine + message);

  }
}

// var ob = new ccar('benz');
// ob.start('started')
// ob.stop('stop')
// ob.getval()

enum deparment {
  mech, bca, eee, it
};
// console.log(deparment.it);

let myfun = (obj: object) => {
  return { ...obj, hi: 'hii' }

};

a = {
  name: 'siva',
  age: 20
}
let ob = myfun(a)
// console.log(ob.name);


let myfun2 = (obj: object) => {

  obj['message'] = 'hiii'
  return obj
};

// console.log(myfun2(a));
// console.log(a);


// genric.........

let myfun11 = <T>(obj: T) => {
  return { ...obj, hi: 'hii' };

};
a = {
  name: 'siva',
  age: 20
}
let ob1 = myfun11(a)
console.log(ob1.name);
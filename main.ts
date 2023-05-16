export {};
let message ='Hi.. welcome from tn';
// console.log(message);

let a:any=123;
a=1;
a='str';

let b:number=1.2;
b=1;

let c :string='str';

let d:boolean=true;

let nul:null;
nul=null;

let array=[1,2,3,4];

let arrstr:string[]=['strig'];
// console.log(arrstr);

let multitype:number|string;
multitype=11;
multitype='str';

let obj={
    name:'siva',
    age:20
};

function sum(a:number,b:number):number{
    return a+b
};
// console.log(sum(2,4));

function changecase(a){
    return a.toLowerCase();
};

function changecase2(a:string,b?:string):string{
    if (b)
        return a.toLowerCase()+b;
    return a.toLowerCase();
};

// console.log(changecase2('HII','siva'));

function defaultValue(a:string,b:string='siva'):string{
    if (b)
        return a.toLowerCase()+b;
    return a.toLowerCase();
};

// console.log(defaultValue('HII'));

function object(point:{x:number,y:number}){
    return point.x+point.y
};
let p={
    x:2,
    y:4
};
console.log(object(p));

interface point{
    x:number;
    y:number;
};
function object2(point:point){
    return point.x+point.y;
};
let interfacevale:point={
    x:20,
    y:20,
};
console.log(object2(interfacevale));


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
  console.log(calculator(5, 3, '+')); // Output: 8
  console.log(calculator(10, 2, '-')); // Output: 8
  console.log(calculator(4, 2, '*')); // Output: 8
  console.log(calculator(10, 0, '/')); // Output: Error: Division by zero
  console.log(calculator(5, 3, '%')); // Output: Error: Invalid operator
  
// Number Methods

console.log((100).toString());

//console.log(100..toString);

console.log((100.5444).toFixed(2));

console.log(parseInt("100 osama"));

console.log(parseFloat("100.500 osama"));

console.log(Number.isInteger("100"));

console.log(Number.isInteger(100.545));

console.log(Number.isInteger(100));

console.log(Number.isNaN("osama"));

/**
 * Math Object
 */

console.log("***************");

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.1));

console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 30));

console.log(Math.max(10, 20, 30));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.5));

/**
 * Number Challenge
 */
console.log("*************");

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// find Smallest Number and return int
console.log(Math.round(Math.min(a, b, c, d)));

// use a & d one time to get the needed output

console.log(a ** Math.round(d)); //10000

// get int 2 from from d with 4 methods;

console.log(Math.round(d));
console.log(Math.ceil(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// b & d to get this values
console.log(((b - d * 16.89) / d).toString()); // 66.67 string
console.log(Math.ceil((b - d * 16.89) / d)); // 67 Number

"use strict";
// Optional Parameters
Object.defineProperty(exports, "__esModule", { value: true });
let Optional = (name, Bio_data) => {
    console.log(name, Bio_data);
};
Optional("asif", true);
Optional("asif");
Optional("asif", 23);
let product = {
    name: "asif",
    Bio_data: "age 23"
};
console.log(product.Bio_data);
// Rest Parameters
function add(num1, num2, ...num3) {
    let sum = num1 + num2;
    for (let i = 0; i < num3.length; i++) {
        sum += num3[i];
    }
    return sum;
}
console.log(add(2, 3, 5, 6, 7, 89, 9));
// EXPLICIT CASTING (Manual data assign) when assign type unknown not run bolton function then need use Explicit casting
// Bolton function is not run in javascript then need use Explicit casting
let age = "asif 11234";
// console.log(age.); // show error not use any bolton function of javascript
// console.log((age as number).toFixed(2));// (age as number) assign Explicit Casting
console.log(age.length);
// SyntaxError: Use wrong spell in bolton functions call syntax Error;
// Error
// let x: number = "hello"; Example
// Fixed
let x = 10;
// Error
// if (x === 10 {
//       console.log("x is 10");
//   }
// Fixed
if (x === 10) {
    console.log("x is 10");
}
// Type Error: 
// when assign type wrong then use type error;
// Trying to add a number to a string: 5 + "hello" results in a TypeError 
// because you can't directly add a number to a string.
//  Error    
// console.loger(" hello world");
// Fixed  
console.log(" hello world");
// STRUCTURAL TYPING: To check Type and property in two objects both are same. and check quantity of
// RHS(right hand side) not less then LHS. lf RHS quantity less then LHS show Error.
let person = {
    name: "asif",
    age: 23
};
let person2 = {
    name: "akber", // property and type as same as person Object
    age: 65, // property and type as same as person Object
    phone_No: 1234567890
};
console.log(person);
// LHS      RHS
person = person2;
console.log(person);
let Employee = {
    name: "asif",
    id: 123,
    phone_No: 1234567890,
    age: 23,
    Employee_No: 112233,
    Depart: "IT",
    Designation: "Software Developer",
    punctual: true
};
console.log(Employee);
// STALE OBJECT: Phely se bana hua object/ باسی آبجیکت // Example already made Employee object
// When you assign one object to another object then both object point same memory location
// then show error stale object
// FRESH OBJECT: تازہ آبجیکت Make during the time of assign.
person = {
    name: "sultan",
    age: 37
}; // iss case may Type, property and Quantity same honi chahi hai.
console.log(person);
// Synchronous and A Synchronous
// 1)CALL STACK - Synchronous // A quick responds
// 2)CALLBACK QUEUE/ Web Apis - A Synchronous // Delayed responds
// Web site Loupe // iss web site ke through example se samjhaya hai ke typescript
//  A synchronous ko delay se chalny ki wajah se side per kardeti hai our phely Synchronous data
// ko run karti hai.
// Synchronous - line by line, column by column, without waiting
// console.log(1);
// console.log(2);
// function add() {
//   let res = 5 + 5;
//   return res;
// }
// let res = add();
// console.log(44);
// console.log(res);
// ASynchronous - delay in performing task
//1)CALLBACK functions
//main function - HOF higher order function
function One(cb) {
    console.log("one");
    cb(); //calling the cb function
}
//Callback
function Two() {
    console.log("ASYNC FUNCTION");
}
One(Two);
//    SET TIMEOUT FUNCTION
//   A setTimeout is a function in programming (especially in JavaScript) that lets you delay running a piece of code. You tell it what you want to do and how long to wait before doing it.
// Here's how it works in simple steps:
// What to do: You write some code that you want to run later.
// How long to wait: You tell setTimeout how many milliseconds to wait before running your code.
// Run it: After the specified time, your code runs.
// Example
// If you want to show a message after 2 seconds, you can use setTimeout like this:
// javascript
// Copy code
setTimeout(function () {
    console.log("Hello after 2 seconds!");
}, 2000);
// In this example:
// The message "Hello after 2 seconds!" will appear after waiting for 2000 milliseconds (2 seconds).
// It's like setting an alarm: you tell it when to ring, and when the time comes, it goes off.

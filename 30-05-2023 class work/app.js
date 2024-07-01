"use strict";
// enum Fuel {
// petrol= "Rs 280",
// diesel= "Rs 285"
// }
// console.log(Fuel.petrol); 
// enum Fuel {
//     petrol,
//     diesel
//     }
//     console.log(Fuel[1]); //   throw index ans diesel
Object.defineProperty(exports, "__esModule", { value: true });
// const enum
//    const enum Fuel {
//         petrol,
//         diesel
//         }
//         console.log(Fuel[1]); // show Error not use throw index
// Tuples vs Array
// let student:(string | number | boolean)[]=[122, true , "ali"];// Array Non sequential data
// let info:[string , number , boolean]=["ali", 123 , true];// Tuples is a sequential data
// console.log(student[1]);
// console.log(info[1]);
// //NESTED ARRAY
// let student:(string | number | boolean)[][]=[[122, true , "ali"],[124, true , "asif"]];
// //NESTED TUPLE
// let info:[string , number , boolean][]=[["ali", 123 , true],
// ["ASIF",123,false],["Ayaz",124,true]]; //nested array
// console.log(info[1][0]);
// Modules
const main_1 = require("./main");
let fadd = (0, main_1.add)(3, 6);
// console.log(fadd);
// console.log(add(5,6));
// import product
let product = ["vegetable", "fruit", "oil"];
//// Narrowing
// let age: number | string; // union type
// age = 25.209874
// console.log(typeof age);
// if(typeof age === "number"){
//     console.log(age + 5);
//     age.toFixed(2) // decimal place in number
//     console.log(age.toFixed(2));
// }
// else{console.log(`this is string`);
// }
// Narrowing example 2
let age; // union type
age = "twenty five";
console.log(typeof age);
if (typeof age === "number") {
    console.log(age + 5);
    console.log(Math.round(age)); // if found number round value
}
else {
    console.log(age.toUpperCase()); // if found string to upper case
}
// //ANY Type // assign any value , array and function, suggestion not use
// let fname : any = "asif";
// fname = [1,2,3,5 ]
// fname = ()=> true; // any type is compatible of all Types
// // UNKNOWN Type // 
// let fname : any = "asif";
// fname= true
// fname = [1,2,3,5 ]
// fname = ()=> true;
// let val:unknown // suggest use if unknown types
// let val1:unknown = val; // ok type unknown compatible with type unknown
// let val2:any = val; // ok type Any compatible with type unknown
// let firstName:string = val; // show error unknown not compatible with string
// let age:number = val; // show error unknown not compatible with number
//Never type
function _Error() {
    throw new Error;
}
console.log(Error);
// never return value;
// Rest Operator
// function Wallet(color:string,...args:string[]){ // alway type is array
// console.log(color,args);
// console.log(color,...args);
// } 
// Wallet("color red","nic","Atm", "card")

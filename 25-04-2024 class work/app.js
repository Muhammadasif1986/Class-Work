// import {myname} from "./main.js"
// import { log } from "console"
// import { loadEnvFile } from "process"
// console.log(myname);
// // function GetCard (timing:string,rollNo:number){
// //     console.log(`${timing} ${rollNo}`);
// // 
// // GetCard("7 to 10", 2344557)
// //Default Parameter in function
// // function default_value (choice:string="Mother'S choice"){
// //     console.log(`${choice}`);
// // }
// // default_value()
// // default_value("My choice")
// // function meal (choice:string="sabzi"){
// //     console.log(`${choice}`);
// // }
// // meal()
// // meal("korma")
// //using undefined for default value
// // function add (d:number=5, e:number=3){
// //     console.log(d+e);
// // }
// // add()
// // add(12,15)
// // add(undefined,6)
// // return mean console out of function
// function Day(name:string="Thursday",name2:string="monday"){
//     console.log(name);
//    return name
// }
// console.log(Day("friday")); // Print friday
// // return mean console out of function
// function Day1(name:string="Thursday",name2:string="monday"){
//         // Day called declaration
//     console.log(name);    
// }
// console.log(Day1(undefined,"friday")); //undefined error
// function digit(){
//      5
// }
// console.log(digit());//undefined
// function digit1(){
//     return 5
// }
// console.log(digit1());
// function FvtNumber():string{
//     return "Muhammad Asif"
// }
// let FirstName = FvtNumber()
// console.log(FirstName);
// function CHaker():boolean{
//     return true
// }
// console.log(CHaker())
// import myname from "./main.js";
// function Bool():number{
//     return 530.325
// }
// let ans = Bool()
// console.log(ans)
// function Division(first:number=10, second:number=5){
//     let ans = first / second
//     return ans
// }
// console.log(Division())
// function multi(first:number=10, second:number=5){
//     let ans = first * second
//     return ans
// }
// console.log(multi(3,5))
// arrow function
// Block scopes and Global
// // Syntax:
// const myFunction = (param1:string , param2: number): return type => {
//     // Function body
// };
// // Example:
// const add = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(add(4,9))
// // If the function body is a single expression, you can omit the curly braces and return statement:
// const multiply = (a: number, b: number): number => a * b;
// console.log(multiply(4,9))
// // Arrow functions can also be used with no parameters:
// const sayHello = (): void => {
//     console.log("Hello!");
// };
// sayHello()
// // Arrow functions can capture the `this` value of the enclosing context:
// // class MyClass {
// //     private myVar: number = 10;
// //     myMethod = (): void => {
// //         console.log(this.myVar);
// //     };
// // }
// // class name {
// //     constructor) {
// //     }
// // }
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
    getAge() {
        return this.age;
    }
}
const person1 = new Person("John", "Doe", 30);
console.log(person1.greet()); // Output: 30
// Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person1.age);
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    //@ts-ignore
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};

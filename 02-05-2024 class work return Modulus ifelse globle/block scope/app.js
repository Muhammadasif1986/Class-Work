"use strict";
// function Name():string{
//     console.log("Ali");// for human read able
//     return "Ali" // for java script Read able
// }
// let fristName=Name()
// console.log(fristName);
//let Hello = () => {} // Arrow Function
// let Hello1 = () => {
//     console.log("Arrow Function");
// }
// Hello1()
// const fvtNumber=(num1:number,num2:number):string=>{
// let num = 5*5
//   console.log(num);
//    return `${num1}, ${num2}`
// }
// console.log(fvtNumber(19234,215663))
let isEven = (num) => {
    if (num % 2 == 0) {
        console.log(num + " is even Number");
    }
    else {
        console.log(num + " is Odd number");
    }
    return num;
};
// isEven(100)
// isEven(25)
let num = isEven(6);
console.log(num);
// let modulus:number =  (10%2)//ans =0 even number
// let modulus:number =  (5%2)//ans =1 odd number
// console.log(modulus);
// isEven(250);
// isEven(15);
//calculator
// let calculator =(num1:number,num2:number,sign:string)=>{
// if(sign== "/"){
//     console.log(num1 / num2);
//  }
//  else if(sign === "*"){
//     console.log(num1 * num2);
// }
// }
// calculator(2,2,"/")
// calculator(2,2,"*")
// Global scope variable
// var name1 = "Asif"
// if(true){
//     console.log(name1);
// }
// console.log(name1);
// let name2 = "Asif"
// if(true){
//     console.log(name2);
// }
// console.log(name2);
// Blocks scope variable
// function name3(){
//     let name1 = "Taha"
//     console.log(name1);
//     console.log(name2);//global
// }
// console.log(name1);
// let army = "army"
// function police(){
//     let police = "police"
// console.log(police);
// }
// police()
// function bladia(){
//     console.log(army);
//     console.log(police);
// }
// bladia()
// let army = "ARMY" // Global
// const policeStation=()=>{
//     let sp = "SP PS" // Blocks
//     console.log(sp);
//     console.log(army); // global run
// }
// const policeStation2=()=>{
//     let KH = "KH PS"
//     console.log(KH);
//     console.log(sp); // blocks not run
//     console.log(army); // global run
// }
// let teacher = "Asif"
// let session =()=>{
//     let teacher = "Ali"
//     console.log(teacher);
// }
// session()
// console.log(teacher);
// let teacher = "Asif";
// let session = () => {
//   teacher = "Ali"; //remove let assign value to global variable
//   console.log(teacher);
// };
// session();
// console.log(teacher);

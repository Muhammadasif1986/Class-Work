"use strict";
// // type Alias
// // strong typing/ type anonymous
// let myName :string = 'Ali';
// let age : number = 27
Object.defineProperty(exports, "__esModule", { value: true });
// // type Alias /   Nick name
// assign name to type
// type FullName = string
// type age = number
// let Myname : FullName = "Muhammad Asif"
// let Age : age = 27
// type  data= {
//       myame:string,
//       age:number
// }
// let Data : data ={
//       myame:"asif",
//       age: 22
// }
// type ProdName = string
// let ProductName : ProdName[] = ["asfi",'akber', `ali`]
//  using type Alias or Interface
// difference between type Alias and object
// type Alias: use every data type to assign type 
// interface: use in only object type
// type product1 = {
//       name:string,
//       price: number,
//       isExpired:boolean
// }
// interface product{
//       name:string,
//       price: number,
//       isExpired:boolean
//       details:{
// itemCode:number,
// purchase:string,
// color:string[]
//       }
// }
// let productName : product = {
//       name:"Bread",
//       price: 110,
//       isExpired:false,
//       details:{
//             itemCode:123,
//             purchase:"15-07-2024",
//             color:["yellow","blue","green"]
//       }
// }
// console.log(productName.details.color[1]);
// callBack Function
// Promises and chaining
let isFood = true;
const Cooking = () => {
    return new Promise((resolve, reject) => {
        if (isFood) {
            setTimeout(() => {
                resolve("food is ready");
            }, 2000);
            console.log("in process");
        }
        else {
            reject("waiting");
        }
    });
};
// Cooking().then((res)=>{
//       console.log(res);
//       return "chicken biryani"
// }).then((res)=>{
//       console.log(res); 
// })
// .catch((res)=>{
//       console.log(res);
//       return "Order from Hotel"
// })
// .then((res)=>{
//       console.log(res);    
// })
let Respond = async () => {
    let res = await Cooking();
    try {
        console.log("Try", res);
    }
    catch (err) {
        console.log("Catch", err);
    }
};
Respond();

"use strict";
// // Callback Functions
// let MainFun = (cb:()=>void)=>{
//       console.log("Main Function");
// setTimeout(()=>{
//       cb()
// },5000)
// };
// let CallbackFun =()=>{
//       console.log("call back function"); 
// }
// MainFun(CallbackFun)
Object.defineProperty(exports, "__esModule", { value: true });
// // Set Time out
// console.log(1);
// console.log(2);
// setTimeout(() => { //argument may arrow function leta hai
//       console.log("After 2 second");// execution Delay
// },2000);
// console.log(3);//execute first from setTimeout
// let products=[
//       {
//             name:"laptop",
//             price:1000
//       },
//       {
//             name:"mobile",
//             price:500
//       },
//       {
//             name:"tablet",
//             price:2000
//       }
// ];
//       function getArray(cb:()=>void){
//             console.log("Fetching...");
//             setTimeout(() => {
//                   cb();
//             },3000);
//       }
//       // Callback Functions
// function displayData(){
//       console.log("products",products);
// }
// getArray(displayData);
// // Callback Hell in java Script
// // PROMISE // To avoid Callback Hell
let num = 49;
let result = () => {
    return new Promise((resolve, reject) => {
        if (num > 50) {
            resolve("Result Pass");
        }
        else {
            reject("Result Fail");
        }
    });
};
//       result().then((Pass)=>{
//             console.log(Pass);
//       }).catch((fail)=>{
//             console.log(fail);    
//       }).finally(()=>{
//             console.log("Your result is");
//       })
// let Myfunc = () => {
//       return new Promise((resolve, reject)=>{
//             resolve("Data Fetched");
//       })
// }
// Myfunc().then((ass)=>{
// console.log(ass);
// })
// // REJECT
// let Myfunc = () => {
//       return new Promise((resolve, reject)=>{
//             reject("Error");
//       })
// }
// Myfunc().catch((err)=>{
// console.log("Failed ",err);
// })
let IsVictory = true;
const cricket = () => {
    return new Promise((resolve, reject) => {
        if (IsVictory) {
            setTimeout(() => {
                resolve("we Won!");
            }, 2000);
        }
        else {
            setTimeout(() => {
                reject("We Lost");
            }, 2000);
        }
    });
};
// cricket().then((won)=>{
// console.log(won);
// }).catch((lost)=>{
// console.log(lost);
// })
// .finally(()=>{
// console.log(`flight pakro`);
// })
// console.log("Match in progress");
//  Passing the pillow Concept
// chaining
// cricket()
// .then((respond)=>{
//       console.log(respond);
//       return "MOM Baber"
// })
// .then((MOM)=>{
//       console.log("second .then ",MOM); 
//       return "50 of 20" 
// })
// .then((run)=>{
//       console.log("third .then ",run); 
// })
// async await programming
let getResult = async () => {
    try {
        let results = await result();
        console.log(results);
    }
    catch (Error) {
        console.log(Error);
    }
    console.log("try best");
};
getResult();
// async function getData(){
//       try {
//       let respond = await cricket()
//       console.log(respond);
//       }
//       catch(Error){
//             console.log("Error ",Error);
//       }
// }
// getData()
// async 
// TRY // successful respond
// catch // unsuccessful respond
// CHALK
// Chalk is a soft, white rock made mostly of tiny fossilized sea creatures' shells. It's easy to write with and is often used for drawing on blackboards. When you rub chalk on a surface, it leaves a white mark that can be wiped off easily. People also use it in sports to mark fields and in classrooms to write lessons.
// 
// ChatGPT
// Sure, here’s a simple explanation about chalk written in TypeScript:
// typescript
// Copy code
// Define a simple class to represent Chalk
// function fetchData(): Promise<string> {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Data fetched successfully");
//         }, 2000);
//       });
//     }
//     fetchData().then((data)=>{
// console.log("Resolve ", data);
//     })
// async function getData(){
//       try {
//       let respond = await fetchData()
//       console.log("resolve ",respond);
//       }
//       catch(Error){
//             console.log("Error ",Error);
//       }
// }
// getData()
// let obj = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             reject("sorry Error found")
//       },3000)
// })
// let getObj = async()=>{
//       try{
//       let objRespond = await obj
// console.log("Not print");
// }
// catch(rej){
//       console.log(rej);
// }
// }
// getObj()
// CHALK
// // Define a simple class to represent Chalk
// class Chalk {
//       color: string;
//       isUsedForWriting: boolean;
//       constructor(color: string) {
//         this.color = color;
//         this.isUsedForWriting = true;
//       }
//       write(): string {
//         return `This ${this.color} chalk is used for writing.`;
//       }
//       erase(): string {
//         return "The chalk marks can be wiped off easily.";
//       }
//     }
//     // Create an instance of the Chalk class
//     const whiteChalk = new Chalk("white");
//     console.log(whiteChalk);
//     // Use the write and erase methods
//     console.log(whiteChalk.write()); // Output: This white chalk is used for writing.
//     console.log(whiteChalk.erase()); // Output: The chalk marks can be wiped off easily.
let id = false;
function getDatA() {
    return new Promise((resolve, reject) => {
        if (id) {
            setTimeout(() => {
                resolve(`Student Detail is {"name": "Asif", "Class": "nine", "RollNo": "2234"}`);
            }, 3000);
        }
        else {
            setTimeout(() => {
                reject(`Not found Detail`);
            }, 3000);
        }
    });
}
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    try {
        const data = await getDatA();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
fetchData();

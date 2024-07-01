// Type Alias// type assign karnay kay lye

// type IrfanFriend = number
// type IrfanOffice = number
// const irfanOffice:IrfanOffice =9233312344
// const irfanFriend:IrfanFriend = 92345678989
// console.log(irfanFriend , irfanOffice);

// 2nd Exaple of (Types Elias)
// type human = string
// type animal = string
// const My : human= "Muhammad Asif"
// const Animals : animal= "Cow"
// console.log(My , Animals);

//3rd Example of (Types Alias) for Array string
// type Friend= string[]
// let MyFriend:Friend=["akber","ayaz","sajid"]
// console.log(MyFriend);

// (Type Union) 1 variable may 2 types assign karna.
// let rollNo:number | string[] | number[] = 2222 // assign Different types 
// console.log(rollNo);

// rollNo =[ "asif 123444","akdflf","irnksdo"]// assign type string"
// console.log(rollNo);

// rollNo = [1,2,3,4,5]
// console.log(rollNo);

// type No = number | string | number[]
// let number:No = [12,23,45]
// console.log(number);

// (Type Liters) when you know Type and arguments

// let size: "small" | "medium" | "large" = "medium"
// console.log(size);

// size = "small"
// console.log(size);

// size = "large"
// console.log(size);
// size = "maximum" // not assign value out of assign data types

// type TrafficLight = "red"|"green"|"yellow"
// let light:TrafficLight = "green"
// console.log(light);

// let User:"login"|"logout"="logout"
// console.log(User);
// User = "logout"
// console.log(User);

// type Friends = string
// let Friend = ():Friends=>{
//     let Dost = "Akber & Ayaz"
//     return Dost
// }
// console.log(Friend());

// (Objects Types) Key and values

// const car:{ make: string,
//      model: number,
//       variant: string ,
//       Start:()=>string,
//        speed:() => void,
//         isAC:()=> boolean} = {
//   make: "toyota",
//   model: 2023,
//   variant: "1800 cc",
//   Start:()=>{
// return "my car is start"
//   },
//   speed:()=>{
//     console.log("car speed is 100 km/ph");// when not return use type void
//    },
//    isAC:()=> true
// };
// console.log(car);
// console.log(car.make);
// console.log(car.Start());
// console.log(car.speed());
// console.log(car.isAC());

// Type Alias in Object
// type car2={ make: string,
//     model: number,
//      variant: string ,
//      Start:()=>string,
//       speed:() => void,
//        isAC:()=> boolean} 

// const car2:car2 ={
//  make: "toyota",
//  model: 2023,
//  variant: "1800 cc",
//  Start:()=>{
// return "my car is start"
//  },
//  speed:()=>{
//    console.log("car speed is 100 km/ph");// when not return use type void
//   },
//   isAC:()=> true
// };

// // console.log(car2);
// // console.log(car2.make);
// // console.log(car2.Start());
// console.log(car2.speed());
// console.log(car2.isAC());


// (Nested Object)
// const slip ={
//     customer:"Ali",
//     product : {
//         name:"cake",
//         price:1300
//     }

// }
// console.log(slip.product.price);

// type slip1 = {
//     customer:string,
//     product:{
//         name:string,
//         price:number,
//         is_testy:()=>string
//     }
// }

// const slips:slip1 ={
//     customer:"Ali",
//     product : {
//         name:"cake",
//         price:1300,
//         is_testy:()=> "nice"
//     }

// }

// console.log(slips);
// console.log(slips.product.is_testy());
// home work
// Array - 10 object
// name
// color
// print the object where color is white

// type Colors={
//     name:string,
//     Id:number,
//     color:string,
//     intensity:string
// };

// const color_Arr:Colors[] =[
//     {name:"sky",Id:1,color:"blue",intensity:"light"},
//     {name:"clouds",Id:2,color:"white",intensity:"light"},
//     {name:"roof",Id:3,color:"white",intensity:"light"},
//     {name:"sheep",Id:4,color:"yellow",intensity:"light"},
//     {name:"cow",Id:5,color:"brown",intensity:"dark"},
//     {name:"goat",Id:6,color:"white",intensity:"light"},
//     {name:"camel",Id:7,color:"camel",intensity:"dark"},
//     {name:"parrot",Id:8,color:"green",intensity:"dark"},
//     {name:"sparrow",Id:9,color:"pink",intensity:"light"},
//     {name:"mountain",Id:10,color:"dark beige",intensity:"dark"},
//     {name:"shirt",Id:11,color:"white",intensity:"light"},
//     {name:"shoes",Id:12,color:"black",intensity:"dark"},
//     {name:"book",Id:13,color:"blue",intensity:"dark"},
//     {name:"pages",Id:14,color:"white",intensity:"light"},
//     {name:"bag",Id:15,color:"red",intensity:"dark"},  
// ];

// const whiteColors: Colors[] = color_Arr.filter(item => item.color=== "white"); 
console.log();

// const Id: Colors[] = color_Arr.filter(item => item.Id >=5 && item.Id <= 10 );
// const intensity: Colors[] = color_Arr.filter(item => item.intensity !== "light");
// console.log(whiteColors);
// console.log(Id);
// console.log(intensity);

// interface person {
//   name:string;
//   age:number;
// }

// class User implements person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   type Name = { name: string };
// type Age = { age: number };

// type Person = Name & Age; // Intersection
// type StringOrNumber = string | number; // Union

// let person_name : Person ={
//   name:"Asif",
//   age:34
// }

// let age : StringOrNumber = 12;
// age = "12"
// let sum:string = age + "3";

// console.log(person_name);
// console.log(age);
// console.log(sum);

 

// interface Lots {
//   Imp?: string,
//   OrderNo:string,
//   Article:string,
//   Color:string,
//   lot_N0:string,
//   order_Area:number,
//   unit:string,
//   lot_Quantity:number,
//   lot_Area:number,
//   area_unit:string,
//   DOC:()=>string | null
//   Date:string | null,
//   Avg:number | null,
//   Excess:number | null
// }
// let Lot:Lots={
//   OrderNo:"AK-7645",
//   Article:"Gobi",
//   Color:"Beige",
//   lot_N0:"T-3421",
//   order_Area:9000,
//   unit:"sqft",
//   lot_Quantity:2000,
//   lot_Area:9500,
//   area_unit:"sqft",
//   DOC:():string =>{
//     let today = new Date();
//     let future = new Date(today);
//       future.setDate(today.getDate()+18)
//     let day = String(today.getDate()).padStart(2, '0');
// let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
// let year = today.getFullYear();
// let deliveryDate = `${day}-${month}-${year}`;
// return `${future}`

//   },
//   Date:null,
//   Avg:null,
//   Excess:null

// }

// let excess = Lot.lot_Area - Lot.order_Area;
// Lot.Excess= excess;
// let avg= Lot.lot_Area/Lot.lot_Quantity;
// Lot.Avg = avg;
// let today = new Date();
// let day = String(today.getDate()).padStart(2, '0');
// let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
// let year = today.getFullYear();
// Lot.Date = `${day}-${month}-${year}`;
// console.log(Lot);
// console.log(Lot.DOC());

// let today=new Date()
// console.log(today);
// // let date = today.getDate()
// let year=today.getTime()
// console.log(year);

// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.

// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.

// You can create a tuple using JavaScript's array syntax:

const failingResponse = ["Not Found", 404];
console.log(failingResponse);

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];
console.log(passingResponse);




// // If you hover over the two variable names you can see the
// // difference between an array ( (string | number)[] ) and
// // the tuple ( [string, number] ).

// // As an array, the order is not important so an item at
// // any index could be either a string or a number. In the
// // tuple the order and length are guaranteed.

// if (passingResponse[1] === 200) {
//   const localInfo = JSON.parse(passingResponse[0]);
//   console.log(localInfo);
// }

// // This means TypeScript will provide the correct types at
// // the right index, and even raise an error if you try to
// // access an object at an un-declared index.

// // passingResponse[1];

// // A tuple can feel like a good pattern for short bits of
// // connected data or for fixtures.

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// // When you have a set of known types at the beginning of a
// // tuple and then an unknown length, you can use the spread
// // operator to indicate that it can have any length and the
// // extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs:PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[2], 300, 300, 300],
];
// console.log(payStubs);


const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

// console.log(monthOnePayments);
// console.log((monthTwoPayments));

// console.log(monthThreePayments);


// // You can use tuples to describe functions which take
// // an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

//
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/



// async function getFavoriteNumber(): Promise<string> {
//   return "asfi";
// }
// // console.log(getFavoriteNumber());
// async function getFavoriteNumber():Promise<string> {
//   let name:string ="asif"
//   return name;
// }
// console.log(getFavoriteNumber());


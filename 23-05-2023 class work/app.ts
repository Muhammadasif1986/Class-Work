// // only use for object types
// interface Mycar {
//     make:string,
//     model:number
//     types:{
//         name:string
//         make:number
//     },
//      variant: string ,
//      Start:()=>string,
//       speed:() => void,
//        isAC:()=> boolean
// }
//     //    type intersection // merge to types
//     type Teacher = {
// teacher_name:string,
// exp:string
//     }

//     type student ={
//         stud:string,
//         rollNO:number
//     }
//     let class_room:Teacher & student={
//         stud:"asif",
//         teacher_name:"Ali jawad",
//         exp:"5 year",
//         rollNO:34566
//     }
//     console.log(class_room);

// nested Array types
// const fruits:string[][] = [
//     ["mango", "peach"],
//     ["water", "food"],
//     ["asif","akber"]
// ]
// console.log(fruits[2][1]);//result Akber



// // nested Array union types
// const fruits:(string | number | boolean)[][] = [
//     ["mango", "peach"],
//     ["water", "food"],
//     ["asif","akber"],
// [1,2,3,4,5,6],
// [2,4,6,8,10],
// [true,false,true,false]
// ]
// console.log(fruits[5][2]); //result true

// // Loops;
// // for loop
// // take tree expression
// // 1. Starting Point;
// // 2. Ending point
// // 3. step to reach ending point
// for(let i = 1; i <=5; i++){
// console.log(i);
// }
// for(let i = 1; i <=5; i++){
// console.log(i+"hello");
// }

// for(let i = 1; i <=5; i++){
//     if(i%2==0){
//         console.log(i+" even number");
//     }
//         else{
//             console.log(i+" Odd number");    }
//     }

//     for(let i = 10; i <=25; i=i+5){
// console.log(i);
// }
// // multiplication loop
//     for(let i = 5; i <=40; i=i*2){
// console.log(i);
// }

// // post decrement loop
//      for(let i = 5; i >=1; i--){
//     console.log(i);
//     }
//  for(let i = 10; i >=1; i=i-2){
// console.log(i);
// }

// // while loop
// using while loop when unknown ending point.
//1. out side loop variable declare mention starting point in variable
// 2. within round brackets ending point point
// 3. within curly brackets step to reach ending point
// let a =1 //sp
// while(a <= 10 ){ // ep
//     console.log(a);
//     a++
// }
// let b =1 //sp
// while(true ){// ep// infinite loop
//     console.log(a);
//     a++
// }

// let a =10 //sp
// while(a >= 0 ){ // ep
//     console.log(a);
//     a--
// }

// // for loop in array
let person: string[] = ["asif", "akber", "ali", "sultan"];

// let copy:string[] = [...person].sort()
// console.log(copy);
// person.reverse()
// console.log(person);


// let absent :string= "akber";
// let newGuest:string="Musa";
// person[person.indexOf(absent)] = newGuest
// let person2 = person.slice(1,3) // do not slice original array.
// console.log(person2);
// person.splice(2,1,"Ali jawad")

// for (let i = 0; i < person.length; i++) {
//   console.log("hello " +person[i]);
// }

// // (for of) loops
// for(let players of person){
//     console.log(players);
// }

// //enum //same as like type liters  when you know values

// enum direction {
//     North="North",
//     South="South",
//     East="East",
//     West="West"
// }
// console.log(direction);
// console.log(direction.North);

// enum days {
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday
// }
// console.log(days.saturday);

// let weekDays:days = days.tuesday;
// console.log(weekDays);



// enum timelot {
//     morning="05am - 08 am",
//     afternoon="12pm - 03 pm",
//     evening="05pm - 09 pm",
//     night="10pm - 12 am",
//     // when not assign value show in console index 0,1,2,3
// }
// const comapss:timelot = timelot.morning
// console.log(comapss);


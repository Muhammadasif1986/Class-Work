
const FvtNumber=():number=> 10*4
// let Ans =FvtNumber()
// console.log(Ans);
// console.log(FvtNumber());


//Array

// let fruit:string[]=["apple","orange","watermelon",]
// console.log(fruit); // print array
// console.log(fruit[0]);// print first index on array
// console.log(fruit[1]);//print second index on array
// console.log(fruit[2]);//Print third index on array
// console.log(fruit[3]);//print undefined due to 4th element not found in array
// fruit[1]= "Banana" // update the value index 1
// console.log(fruit);
// fruit.pop() // remove last element
// console.log(fruit);
// fruit.push("Mango") // add element last index on array
// console.log(fruit);
// fruit.shift()// Delete first element of array
// console.log(fruit);
// fruit.unshift("Lichee")// add first element of array
// console.log(fruit);
// fruit.slice()

// fruit.slice(1,4)// not change/slice a original array
// console.log(fruit);

// must be perform slice include in new variable
// let ans = fruit.slice(1,4);//  1 to 3 index slice/cut and print.1 include shamil kare ga & 4 exclude shmil nahi kare ga
// console.log(ans);

// must be perform slice include in new variable
// let ans = fruit.slice(-2);// array ke last se akhir ke 2 element ko print karde ga. called negative method
// console.log(ans);

let fruit:string[]=["apple","orange","watermelon","mango","cherry"];
fruit.splice(1,2,"Moli","gajar");
console.log(fruit);
// first argument starting point
// second argument remove/add no of elements
// third argument replace element define

// let array=["apple","orange","watermelon",["moli","began","piyaz"]]
// console.log(array);
// console.log(array[3]);//print nested array through index
// console.log(array[3][2]);//print nested array index piyaz, array in array

// const number:number[]=[0,1,2,]
// console.log(number); // print array
// console.log(number[0]);// print first index on array
// console.log(number[1]);//print second index on array
// console.log(number[2]);//Print third index on array
// console.log(number[3]);//print undefined due to 4th element not found in array

// Objects

// let obj ={
//     fruitName:"apple",
//     price:200,
//     season:"summer"
// }
// console.log(obj);
// console.log(obj.fruitName);
// console.log(obj.price);
// console.log(obj.season);

let student = [{
    name:"Ali",
    rollNumber:1234,
    timing:"7-10"
},
{
    name:"hamza",
    rollNumber:4321,
    timing:"7-10"
},
{
    name:"owais",
    rollNumber:1235,
    timing:"7-10"
},


]
console.log(student[0]);
console.log(student[0].name);
console.log(student[0].rollNumber);
console.log(student[0].timing);












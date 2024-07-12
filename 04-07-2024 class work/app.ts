// //  IN CAPSULATION (PRIVATE,PROTECTED,PUBLIC BY DEFAULT,)
// class ACTemp {
//       private _temp:number
//       constructor(t:number){
//             this._temp=t
//       }
//       get temp():number{
//             return this._temp
//       }
//       set settemp(t:number){
//             if(t < 25){
//                   console.log("Bill ayega");   
//             }
//             this._temp=t
//       }
// }
// const temp = new ACTemp(25) // (new) keyword make Object and call the constructor
// // console.log(temp._temp); // due to private we can't access the temp outside the class
// console.log(temp.temp); // Right way to call private value thought Getter function

// temp.settemp=24;// Right way to set private value thought Setter function
// console.log(temp.temp);


// ; // Right way to call private value thought Getter function



// class ACTemp2 {
//       protected _temp:number
//       constructor(t:number){
//             this._temp=t
//       }
// }
// const temp2 = new ACTemp2(25) // (new) keyword make Object and call the constructor
// // console.log(temp2._temp); // due to protected we can't access the temp outside the class only use in child class

// // POLYMORPHISM / METHOD OVERRIDING
// // POLY = MANY
// // MORPHISM = FORMS
// class Animal {
//    public name :string
// constructor(name:string){
//       this.name=name
// }
// makeSound(){
//       console.log("Animal making sound");
// }
// }

// class Loin extends Animal{
//       isKing:boolean
//    constructor(name:string,king:boolean){
//       super(name)
//       this.isKing=king
//    }
//    makeSound(){ // method overriding
//       console.log("Loin is Roaring");//if not make makesound() in child class,
// //          auto get makesound() from parent class
//    }
// }
//    const loin = new Loin("Shera", true)
//    console.log(loin.makeSound());
   
// ABSTRACTION 
// Abstract class
abstract class Laptop {
   ram :string
   screen :number
constructor(ram:string,screen:number){
   this.ram=ram
   this.screen=screen
}
// abstract method 
abstract display():void // abstract method don't have body //must be override in child class

// non abstract method
poweroff(){
   console.log("Powering off");//not necessary in child class
}
}

// Not make a object/intens on Abstract class
// let hp = new Laptop("8GB", 15) // showing Error due to abstract class 


class Hp extends Laptop{
   constructor(ram:string, screen:number){
      super(ram, screen)
   }
   display(): void {
         console.log("LED");     
   }
}
let hp = new Hp("8GB", 15)
console.log(hp);

// Ternary operators
// 1 define condition //let variable = (condition)?if condition: else condition
// 2 if statement 
// 3 else statement
let result = (5<6)?true:false;
console.log(result);


let Teacher:string = "female"
let result2 = (Teacher == "male")? "He is a sir" : "She is a miss";
console.log(result2);

let age = 18
let result3 = (age >= 18)? "Adult" : "Not Adult";
console.log(result3);


// undefined//  value is not defined assign in future
// null //  but not assign in future intentionally define value null
let a // undefined
a=5
console.log(a);

let b = null
console.log(b);


"use strict";
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
// // POLYMORPHISM / METHOD OVERRIDINGP
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
class Laptop {
    ram;
    screen;
    constructor(ram, screen) {
        this.ram = ram;
        this.screen = screen;
    }
}
// making a object/intens on Abstract class
// let hp = new Laptop("8GB", 15) // showing Error due to abstract class 
class Hp extends Laptop {
    constructor(ram, screen) {
        super(ram, screen);
    }
}
let hp = new Hp("8GB", 15);
console.log(hp);

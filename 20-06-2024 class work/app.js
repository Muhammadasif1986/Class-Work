"use strict";
// OBJECT ORIENTED PROGRAMMING
// 1- Class is like a map/blueprint of object
// define in class; i- Variables/class property; ii- Methods/ functions
// 2- Object
Object.defineProperty(exports, "__esModule", { value: true });
// class Car { // class name always start with capital alphabet
// name: string = "Civic"; // variables
// model: string = "2022";
// make: string = "Honda";
// year: number = 2022;
// }
// // (new) keyword is used to create object
// let myCar = new Car();
// console.log(myCar);
// // Trying
// class Person {
//     name: string = "ASIF"
//     age: number= 38
// }
// let person1 = new Person();
// console.log(person1.name);
// person1.name = "Muhammad Asif" // this is difficult way to assign value solve this use constructor
// class Car1 { // class name always start with capital alphabet
//       name: string; // called Class Properties
//       age: number;
// // Constructor: is Class function. for initialize the properties of class object.
// // this : refer to class properties
//       constructor(n:string, a:number){
//             this.name = n
//             this.age = a
//       }
//       }
// class Car1 { // class name always start with capital alphabet
//       name: string; // called Class Properties
// // Constructor: is Class function. for initialize the properties of class object.
// // this : refer to class properties
//       constructor(n:string){
//            this.name = n     
//       } 
//       }
//       let p = new Car1("Corolla")
//       let p1 = new Car1("Toyota")
//       let p2 = new Car1("Civic")
//       console.log(p,p1,p2);
// class Car1 {
//       name: string; 
//       model: string | number;
//       make: string;
//       constructor(name:string, model: string | number, make:string){
//            this.name = name 
//            this.model = model
//            this.make = make  
//       } 
// }
// let p = new Car1("Corolla", 2022, "Toyota")
// let p1 = new Car1("Toyota", 2020, "Honda" )
// let p2 = new Car1("Civic", 2019, "Honda")
// class Car1 {
//       name: string; 
//       model: string | number;
//       make: string;
//       constructor(name:string, model: string | number, make:string){
//            this.name = name 
//            this.model = model
//            this.make = make  
//       } 
//       getDetails():string{
//             return `My car is ${this.name} and my model is ${this.model} and make is ${this.make}`
//       }
//       favFood(food:string):string{
//             return `My fav Food is ${food}`
//       }
//       prop_FUNargument(drink:string):string{
//             return `My fav Drink is ${drink} and my car is ${this.name} and my model ${this.model}`
//       }
//       }// Class ending curly braes
//       let p = new Car1("Corolla", 2022, "Toyota")
//       let p1 = new Car1("Toyota", 2020, "Honda" )
//       let p2 = new Car1("Civic", 2019, "Honda")
// // console.log(p,p1,p2);
// console.log(p.getDetails()); // consol and call getDetails function
// console.log(p1.getDetails()); // consol and call getDetails function
// console.log(p2.getDetails()); // consol and call getDetails function
// console.log(p.favFood("Biryani"));
// console.log(p.favFood("halwa"));
// console.log(p.prop_FUNargument("Next cola fizz"));
// console.log(p1.prop_FUNargument("Next cola"));
// // class -> object
// // class -> constructor -> object -> assign value
// INHERITANCE  
// parent/Base/Super CLASS 
//  CHILD CLASS/DERIVED CLASS
// class Employee{
//       name: string;
//       salary: number;
// }
// class Manager{
//       name: string;
//       salary: number
// }
// parent class 
class Vehicle {
    engine;
    tyres;
    name;
    constructor(engine, tyres, name) {
        this.engine = engine;
        this.tyres = tyres;
        this.name = name;
    }
}
// child class
class Car extends Vehicle {
    constructor(engine, tyres, name) {
        super(engine, tyres, name); // super is used to call parent/super class constructor
    }
}
let car = new Car("V8", 4, "Civic");
console.log(car);
// Trying
class Truk {
    name;
    tyres;
    constructor(name, tyres) {
        this.name = name;
        this.tyres = tyres;
    }
}
class Bike extends Truk {
    constructor(name, tyres) {
        super(name, tyres);
    }
}
let bike = new Bike("honda", 2);
console.log(bike);

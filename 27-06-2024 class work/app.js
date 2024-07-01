"use strict";
// STATIC
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    name;
    rollNO;
    timing;
    empNo;
    CourseName = "GIAIC"; // not change able read only
    Fees; // not use out side class
    constructor(name, Roll, T, e, F) {
        this.name = name;
        this.rollNO = Roll;
        this.timing = T;
        this.empNo = e;
        this.CourseName = 'GIAIC'; // Not chang able
        this.Fees = F; // Not use out side class
    }
    getDetails() {
        console.log(this.name, this.rollNO, this.timing, this.Fees);
    }
}
let E = new Emp('Asif', 123, 'Morning', 123, true);
// console.log(E);
// E.getDetails()
// console.log(E.empNO);// show error protected not use out side
// console.log(E);
// console.log(E);
// Visibly 
// 1-Public // using any way out side 
// 2-Protected // using only parent and child class
// 3-Private // using only within the class
// 4-readonly // not change able read only
class Emp2 extends Emp {
    constructor(name, rollNO, timing, empNo, CourseName, Fees) {
        super(name, rollNO, timing, empNo, Fees);
    }
    getDetails() {
        console.log(`${this.name} ${this.rollNO} ${this.timing} ${this.empNo} ${this.CourseName}`);
    }
}
let E2 = new Emp2('Asif', 123, 'Morning', 123, "asfi", true);
E2.getDetails();
console.log(E2);
// class Bank{
//       // _balance private in javascript
//       private _balance:number
//       static mypin:number = 1234 // STATIC using direct class no need to make constrictor
//       constructor(b:number){
//             this._balance=b
//       }
//       // GETTER FUNCTION
//       get myBalance(){
//             return this._balance
//       }
// SETTER Function
//       set deposit(cash:number){ // set cannot return a value
//             console.log(cash + this._balance);   
//       }
//       set withdraw(cash:number){
//             console.log(this._balance - cash);
//       }
//       // normal function
//       getBalance(){
//             return this._balance
//       }
// }
// if(Bank.mypin == 1234){
// let b = new Bank(1000)
// console.log(b.getBalance());
// console.log(b.myBalance);// calling get myBalance Function without();
// b.deposit = 120 // calling set deposit Function without();
// b.withdraw = 200 // calling set withdraw Function without();
// }else{
//       console.log('Wrong Pin');
// }
// STATIC
class bank2 {
    _balance;
    static mypin = 1234;
    static checkNO = 1;
    constructor(b) {
        this._balance = b;
    }
    get myBalance() {
        return this._balance;
    }
    set deposit(cash) {
        console.log(cash + this._balance);
    }
    set withdraw(cash) {
        console.log(this._balance - cash);
    }
    getBalance() {
        return this._balance;
    }
}
let b2 = new bank2(1000);
console.log(bank2.checkNO++); // update checkNo
//      polygonization
//    abstraction

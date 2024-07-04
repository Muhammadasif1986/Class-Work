                      


//  class person {
//       name:string
//       constructor(name:string){
//           this.name=name
//       }
// }
// let p = new person('Asif')
// // console.log(p);

// // inheritances
// class person1 {
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }

// class Employee extends person1{
//       salary:number
//       constructor(name:string,age:number,salary:number){
//       super(name,age)
//       this.salary=salary
//       }
// }

// let emp = new Employee('Asif', 35,55000)
// console.log(emp);

interface Employee{
      name:string
      rollNO: number
      timing: string
}
class  Emp implements Employee{ // use implements use interface
      name:string
      rollNO: number
      timing: string
     protected empNo: number
     readonly CourseName: string = "GIAIC"// not change able read only
     private Fees: boolean // not use out side class
      constructor(name:string,Roll:number,T:string,e:number, F:boolean){
          this.name=name
          this.rollNO= Roll
          this.timing  = T
          this.empNo=e
          this.CourseName= 'GIAIC' // Not chang able
          this.Fees=F // Not use out side class

          }
          getDetails(){
            console.log(this.name, this.rollNO, this.timing,this.Fees );
      }
}
let E = new Emp('Asif', 123, 'Morning', 123,true)
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

class Emp2 extends Emp implements Employee{
     constructor(name:string,rollNO:number,timing:string,empNo:number,CourseName: string,Fees: boolean){
      super(name,rollNO,timing,empNo,Fees,)
     }
     getDetails(): void {
console.log(
`${this.name} ${this.rollNO} ${this.timing} ${this.empNo} ${this.CourseName}` 
);
     }
      }

let E2 = new Emp2('Asif', 123, 'Morning', 123,"asif",true);
E2.getDetails()
console.log(E2);


// STATIC
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



//  IN CAPSULATION PRIVATE,PROTECTED,PUBLIC BY DEFAULT, 
// STATIC
     class bank2{
       private _balance:number
       static mypin:number = 1234
       static checkNO:number=1
       constructor(b:number){
             this._balance=b
       }
       get myBalance(){
             return this._balance
       }
       set deposit(cash:number){
             console.log(cash + this._balance);
       }
       set withdraw(cash:number){
             console.log(this._balance - cash);
       }
       getBalance(){
             return this._balance
       }
     }
     let b2 = new bank2(1000)
     console.log(bank2.checkNO++); // update checkNo
     
//      polygonization
//    abstraction
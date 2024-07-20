interface Ispass {
isPass:boolean,
marks:number,
totalMarks:number
isOnsite:boolean
}

 interface Student{
      student_Id:number
      Name:string,
      RollNum:string,
      Course: string,
      classTime:string,
      IsPass:Ispass
}

export default Student;

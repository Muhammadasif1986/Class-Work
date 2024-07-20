import * as Data from "./getData"

const allStudent = Data.getallStudent();
// console.log(allStudent);

const OnlineStudent = Data.getOnlineStudent();
// console.log(OnlineStudent);

const Ispass = Data.getIspass();
// console.log(Ispass);

const foundStudent = Data.getStudent(7);
// console.log(foundStudent);

const IsOnline = Data.CheckOnline(5);
console.log(IsOnline);

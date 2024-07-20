"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOnline = exports.getStudent = exports.getIspass = exports.getOnlineStudent = exports.getallStudent = void 0;
const student_1 = require("./student");
let getallStudent = () => {
    return student_1.Students;
};
exports.getallStudent = getallStudent;
const getOnlineStudent = () => {
    let isOnline = student_1.Students.filter((Online) => Online.IsPass.isOnsite);
    return isOnline;
};
exports.getOnlineStudent = getOnlineStudent;
const getIspass = () => {
    let Ispass = student_1.Students.filter((student) => student.IsPass.isPass);
    return Ispass;
};
exports.getIspass = getIspass;
const getStudent = (Id) => {
    let foundStudent = student_1.Students.find((student) => student.student_Id == Id);
    return foundStudent;
};
exports.getStudent = getStudent;
const CheckOnline = (Id) => {
    let isOnline = student_1.Students.find((student) => student.student_Id == Id && student.IsPass.isOnsite);
    if (isOnline) {
        return true;
    }
    else {
        return false;
    }
};
exports.CheckOnline = CheckOnline;

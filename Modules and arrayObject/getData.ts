import { Students as GenAIStudent } from "./student";

export let getallStudent = () => {
  return GenAIStudent;
};

export const getOnlineStudent = () => {
  let isOnline = GenAIStudent.filter((Online) => Online.IsPass.isOnsite);
  return isOnline;
};

export const getIspass = () => {
  let Ispass = GenAIStudent.filter((student) => student.IsPass.isPass);
  return Ispass;
};

export const getStudent = (Id: number) => {
  let foundStudent = GenAIStudent.find((student) => student.student_Id == Id);
  return foundStudent;
};

export const CheckOnline = (Id: number) => {
  let isOnline = GenAIStudent.find(
    (student) => student.student_Id == Id && student.IsPass.isOnsite
  );
  if (isOnline) {
    return true;
  } else {
    return false;
  }
};

// import httpStatus from "http-status";
// import AppError from "../../error/AppError";
import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

// create contact
const createContactInToDb=async(payload:TContact)=>{
    const result=await Contact.create(payload);
    return result;
}

// get all contact
const getAllContactFromDb=async()=>{
    const result=await Contact.find();
    return result;
  }

// get single contact 
const getContactByIdFromDb=async(id:string)=>{
  const result=await Contact.findById(id);
  return result;
}

  export const ContactServices={
    createContactInToDb,
    getAllContactFromDb,
    getContactByIdFromDb,

}
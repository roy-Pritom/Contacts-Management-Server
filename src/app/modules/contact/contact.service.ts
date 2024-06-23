import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContactInToDb=async(payload:TContact)=>{
    const result=await Contact.create(payload);
    return result;
}

const getAllContactFromDb=async()=>{
    const result=await Contact.find();
    return result;
  }

const getContactByIdFromDb=async(id:string)=>{
  const result=await Contact.findById(id);
  return result;
}

  export const ContactServices={
    createContactInToDb,
    getAllContactFromDb,
    getContactByIdFromDb,

}
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

// create contact
const createContactInToDb = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
}

// get all contact
const getAllContactFromDb = async (params:Record<string,unknown>) => {
  const pipeline: any = [];
  const match: any = {isDeleted:false};
  // search contact by name
  if (params?.name) {
      match.name = {
          $regex: params.name as string,
          $options: 'i'
      }
  }
  // search contact by email
  if (params?.email) {
      match.email = {
          $regex: params.email as string,
          $options: 'i'
      }
  }

  pipeline.push({ $match: match })
  const result = await Contact.aggregate(pipeline);
  return result;
}

// get single contact 
const getContactByIdFromDb = async (id: string) => {
  const result = await Contact.findById(id);
  return result;
}

// delete contact 
const softDeleteContactByIdFromDb = async (id: string) => {
  const contact =await Contact.isContactExistById(id);
  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, "Contact doesn't exist!")
  }
  const result = await Contact.findByIdAndUpdate(id, {isDeleted:true}, {
    new: true,
    runValidators: true,
  });
  return result;
}

// update contact 
const updateContactFromDb = async (id: string,payload:Partial<TContact>) => {
  const contact =await Contact.isContactExistById(id);
  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, "Contact doesn't exist!")
  }
  const result = await Contact.findByIdAndUpdate(id,payload, {
    new: true,
    runValidators: true,
  });
  return result;
}

export const ContactServices = {
  createContactInToDb,
  getAllContactFromDb,
  getContactByIdFromDb,
  softDeleteContactByIdFromDb,
  updateContactFromDb
}
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ContactServices } from "./contact.service";

// create contact
const createContact=catchAsync(async(req,res)=>{
    const result=await ContactServices.createContactInToDb(req.body);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.CREATED,
      message:"Contact created successfully",
      data:result
    })
})

// get all contact
const getAllContacts=catchAsync(async(req,res)=>{
    const result=await ContactServices.getAllContactFromDb(req.query);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"Contacts retrieve successfully",
      data:result
    })
})

// get contact by id
const getSingleContact=catchAsync(async(req,res)=>{
  const {id}=req.params;
    const result=await ContactServices.getContactByIdFromDb(id);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"Contact retrieve successfully",
      data:result
    })
})

// update contact
const updateContact=catchAsync(async(req,res)=>{
  const {id}=req.params;
    const result=await ContactServices.updateContactFromDb(id,req.body);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"Contact updated successfully",
      data:result
    })
})

// soft delete contact
const softDeleteContact=catchAsync(async(req,res)=>{
  const {id}=req.params;
    const result=await ContactServices.softDeleteContactByIdFromDb(id);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"Contact deleted successfully",
      data:result
    })
})

export const ContactControllers={
    createContact,
    getAllContacts,
    getSingleContact,
    softDeleteContact,
    updateContact


}
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
    const result=await ContactServices.getAllContactFromDb();
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

export const ContactControllers={
    createContact,
    getAllContacts,
    getSingleContact

}
import { Model } from "mongoose";

export type TContact={
  name:string;
  email?:string;
  phoneNumber:number;
  address:string;
  profilePicture:string;
  isDeleted:boolean;
} 

export interface ContactModel extends Model<TContact> {
    isContactExistById(id:string): Promise<TContact>
  } 
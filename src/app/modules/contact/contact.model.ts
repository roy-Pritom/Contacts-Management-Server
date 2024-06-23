import { Schema, model } from "mongoose";
import { ContactModel, TContact } from "./contact.interface";


const contactSchema = new Schema<TContact, ContactModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
})

// for check contact is exist or not
contactSchema.statics.isContactExistById = async function (id: string) {
    return await Contact.findById(id)
}


export const Contact = model<TContact, ContactModel>('Contact', contactSchema)
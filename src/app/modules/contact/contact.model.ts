import { Schema, model } from "mongoose";
import { ContactModel, TContact } from "./contact.interface";
import { string } from "zod";

const contactSchema = new Schema<TContact, ContactModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: string,
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
    }
}, {
    timestamps: true
})

// for check contact is exist or not
contactSchema.statics.isContactExistById = async function (id: string) {
    return await Contact.findById(id)
}


export const Contact = model<TContact, ContactModel>('Contact', contactSchema)
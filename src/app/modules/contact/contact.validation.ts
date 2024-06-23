import { z } from "zod";

const createContactValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        // Optional email field
        email: z.string().email().optional(),
        phoneNumber: z.number(),
        address: z.string(),
        profilePicture: z.string().url(),
    })
})
const updateContactValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        // Optional email field
        email: z.string().email().optional(),
        phoneNumber: z.number().optional(),
        address: z.string().optional(),
        profilePicture: z.string().url().optional(),
    })
})

export const contactValidationSchemas = {
    createContactValidationSchema,
    updateContactValidationSchema

};
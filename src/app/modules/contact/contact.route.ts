import express from 'express';
import { ContactControllers } from './contact.controller';
import { validateRequest } from '../../middleWares/validateRequest';
import { contactValidationSchemas } from './contact.validation';

const router=express.Router();
// create contact
router.post("/create-contact",validateRequest(contactValidationSchemas.createContactValidationSchema),ContactControllers.createContact);
// get all contact
router.get('/contacts',ContactControllers.getAllContacts);
// get single contact
router.get('/contacts/:id',ContactControllers.getSingleContact);
// update contact
router.patch('/contacts/:id',validateRequest(contactValidationSchemas.updateContactValidationSchema),ContactControllers.updateContact);
// soft delete contact
router.delete('/contacts/:id',validateRequest(contactValidationSchemas.updateContactValidationSchema),ContactControllers.softDeleteContact);

export const ContactRoutes=router;
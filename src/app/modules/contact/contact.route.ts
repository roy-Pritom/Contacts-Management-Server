import express from 'express';
import { ContactControllers } from './contact.controller';

const router=express.Router();

router.post("/create-contact",ContactControllers.createContact);

export const ContactRoutes=router;
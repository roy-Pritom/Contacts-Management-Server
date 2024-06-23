import express from 'express';
import { ContactRoutes } from '../modules/contact/contact.route';

const router=express.Router();
const moduleRoutes=[
    {
        path:"/",
        route:ContactRoutes
    },
]

moduleRoutes.forEach(route=>router.use(route.path,route.route));

export default router;
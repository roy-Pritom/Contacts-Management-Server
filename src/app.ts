import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes';

const app:Application=express();

// parser
app.use(cors())
app.use(express.json())

// router
app.use("/api/v1",router)

// get
app.get('/',async(req:Request,res:Response)=>{
    res.send('Hello user!')
})

export default app;
import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app:Application=express();

// parser
app.use(cors())
app.use(express.json())

// get
app.get('/',async(req:Request,res:Response)=>{
    res.send('Hello user!')
})

export default app;
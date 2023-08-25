import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express()
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import exitPointRouter from './routers/exitPointRouter.js'
// import userRouter from "./routers/userRouter";

const port = process.env.PORT || 8080


app.use(bodyParser.json())

// app.use('/user',userRouter)
app.use('/exit',exitPointRouter)

app.listen(port,()=>{console.log(`Server running on http://localhost:${port}/`);})

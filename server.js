import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express()
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 8080

app.use(bodyParser.json())

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}/`);})

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import empRouter from './Routers/employee.router.js'
import { ConnectDB } from './Database/dbConfig.js';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', empRouter);



app.listen(port, () => {
    
  console.log('App is listening with port>>',port);  
})


ConnectDB()
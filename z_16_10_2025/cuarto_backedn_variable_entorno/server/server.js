import express from 'express'
import dotenv from "dotenv";
dotenv.config();


console.log(process.env.PORT)
console.log(process.env.prueba)


const app = express();
const PORT2 = 8080




app.listen(PORT2, ()=>{
    console.log(`the server is up and running on port ${PORT2}`)
})
import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'

dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080;



// midleware



toConnectToBd()

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})
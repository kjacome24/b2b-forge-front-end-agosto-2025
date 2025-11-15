import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'


import cors from 'cors'
import usersRoutes from './routes/users.route.js'
import forosRoutes from './routes/foros.route.js'


dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080;



// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())




toConnectToBd()


app.use('/api/foros', forosRoutes );
app.use('/api/users', usersRoutes)

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})
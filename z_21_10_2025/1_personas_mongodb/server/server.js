// impotaciones
import express from 'express'
import rotuteEPersona from './routes/personas.routes.js';
import connectDb from './config/databaseConnect.js';

// definicion de app y port
const app = express();
const PORT = 8000


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDb();

app.use('/api/personas', rotuteEPersona)
// app.use('/api/supers', rotuteEPersona)


app.listen(PORT,()=>{
    console.log(`The server is up and runnign on port ${PORT}`)
})
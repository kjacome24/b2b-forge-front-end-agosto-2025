const express = require('express')


// la inicializacion de la app
const app = express()
// la definicon del puerto que vamos a usar
const PORT = 8080


//Midleware


app.get('/',(req,res)=>{
    res.send('Hola mundo!')
})


app.get('/personas', (req,res)=>{
    res.json({name: "Kevin", edad: 35})
})



app.listen(PORT, ()=>{
    console.log('The server is up and running')
})



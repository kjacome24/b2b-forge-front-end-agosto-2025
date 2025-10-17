// importaciones
import express from 'express'

const app = express();

const PORT = 8081;

const personas = [
    {name: "Luz", edad: 19},
    {name: "Kevin", edad: 35},
    {name: "Bruno", edad: 22},
    {name: "Lucia", edad: 19}
]


// MIDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))



// Maneja de rutas complejas

app.route('/personas2').get((req,res)=> {
    res.send("Te conectaste por get")})
    .post((req,res)=>{
        res.send("Te conectaste por el metodo POST")
    })



//RUTAS


app.use(express.static('public'))

app.get('/personas', (req,res)=>{
    res.statusMessage = "Todo bien"
    res.status(201).json(personas)
})

app.post('/personas', (req,res)=>{
    console.log(req.body)
    const {name, edad} = req.body;
    if(!name || !edad){
        return res.status(405).json({message: "falta una de las entradas"})
    }
    const newPersona = {name, edad}
    personas.push(newPersona)
    res.status(201).json(newPersona)
})


app.get('/personas/:name',(req, res)=>{
    const name = req.params.name;
    const persona = personas.find(per => per.name==name)
    if(!persona){
        return res.status(404).json({message: "No hay persona con ese nombre"})
    }
    res.status(201).json(persona)
})



//LISTEN
app.listen(PORT,()=>{
    console.log(`The server is up and running with the prot ${PORT}`)
})

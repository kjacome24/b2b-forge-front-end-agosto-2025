const personas = [
    {name: "Luz", edad: 19},
    {name: "Kevin", edad: 35},
    {name: "Bruno", edad: 22},
    {name: "Lucia", edad: 19}
]


const controladorPersona = {
    obtenerTodos :  (req,res)=>{
    res.statusMessage = "Todo bien"
    res.status(201).json(personas)
}, crearPersona: (req,res)=>{
    console.log(req.body)
    const {name, edad} = req.body;
    if(!name || !edad){
        return res.status(405).json({message: "falta una de las entradas"})
    }
    const newPersona = {name, edad}
    personas.push(newPersona)
    res.status(201).json(newPersona)
}, buscarPerson : (req, res)=>{
    const name = req.params.name;
    const persona = personas.find(per => per.name==name)
    if(!persona){
        return res.status(404).json({message: "No hay persona con ese nombre"})
    }
    res.status(201).json(persona)
}
}

export default controladorPersona;
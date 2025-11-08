import {Foros} from "../models/foros.model.js";

const forosController = {
    getAll : async  (req, res)=> {
        try{
            const foros = await Foros.find();
            return res.status(201).json(foros)
        }catch(e){
            return res.status(400).json(e)
        }

    },
    createOne : async (req, res)=> {
        const {title, description, category, author } = req.body;
        const newArray = {title, description, category, author} 
        try{
            const newForo = await Foros.create(newArray)
            res.status(201).json(newForo)
        }catch(e){

            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }
            if(e.code== 11000){
                messages['title'] = "The title is already present in the BD"
            }

            return res.status(400).json({errors : {...messages}})
        }
    },
    getOne: async (req, res)=> {
        console.log("Entre a la ruta para verificar get one")
        const id = req.params.id;
        try{
            const oneForo = await Foros.findById(id)
            if(!oneForo){
                return res.status(404).json({message: "The id you indicated does not exist"})
            }
            res.status(201).json(oneForo)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    deleteOne: async (req,res)=> {
        const id = req.params.id;
        try{
            const deletedForo = await Foros.findByIdAndDelete(id)
            if(!deletedForo){
                return res.status(404).json({message: "THe id does not exist"})
            }
            res.status(201).json({message: "The foro was succesfully deleted"})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateOne: async (req, res)=> {
        const id = req.params.id;
        const {title, description, category, author } = req.body;
        const dataTobeUpdated = {};
        if(title){
            dataTobeUpdated.title = title
        }
        if(description){
            dataTobeUpdated.description = description
        }
        if(category){
            dataTobeUpdated.category = category
        }
        if(author){
            dataTobeUpdated.author = author
        }
        try{
            const oneUpdated = await Foros.findByIdAndUpdate(id, dataTobeUpdated, {new: true, runValidators: true})
            if(!oneUpdated){
                return res.status(404).json({message: "The id does not exist"})
            }
            res.status(201).json(oneUpdated)
        }catch(e){

            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }

            if(e.code== 11000){
                messages['title'] = "The title is already present in the BD"
            }
            return res.status(400).json({errors : {...messages}})
        }
    }
}


export default forosController;
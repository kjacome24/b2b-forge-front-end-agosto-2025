import {Songs} from "../models/songs.model.js";

const songsController = {
    getAll : async  (req, res)=> {
        try{
            const songs = await Songs.find();
            return res.status(201).json(songs)
        }catch(e){
            return res.status(400).json(e)
        }

    },
    createOne : async (req, res)=> {
        const {title, artist, yearOfRealease, genre } = req.body;
        const newArray = {title, artist,yearOfRealease,genre} 
        try{
            const newSong = await Songs.create(newArray)
            res.status(201).json(newSong)
        }catch(e){

            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }

            return res.status(400).json({errors : {...messages}})
        }
    },
    getOne: async (req, res)=> {
        const id = req.params.id;

        try{
            const oneSong = await Songs.findById(id)
            if(!oneSong){
                return res.status(404).json({message: "The id you indicated does not exist"})
            }
            res.status(201).json(oneSong)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    deleteOne: async (req,res)=> {
        const id = req.params.id;
        try{
            const deletedSong = await Songs.findByIdAndDelete(id)
            if(!deletedSong){
                return res.status(404).json({message: "THe id does not exist"})
            }
            res.status(201).json({message: "The song was succesfully deleted"})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateOne: async (req, res)=> {
        const id = req.params.id;
        const {title, artist, yearOfRealease, genre } = req.body;
        const dataTobeUpdated = {};
        if(title){
            dataTobeUpdated.title = title
        }
        if(artist){
            dataTobeUpdated.artist = artist
        }
        if(yearOfRealease){
            dataTobeUpdated.yearOfRealease = yearOfRealease
        }
        if(genre){
            dataTobeUpdated.genre = genre
        }
        try{
            const oneUpdated = await Songs.findByIdAndUpdate(id, dataTobeUpdated, {new: true, runValidators: true})
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
            return res.status(400).json({errors : {...messages}})
        }
    }
}


export default songsController;
import {User} from '../models/users.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const SECRET = process.env.SECRET;

const userController = {
    getAll : async (req, res) => {
        try{
            const allUsers = await User.find()
            return res.status(201).json(allUsers)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    createOne : async (req,res) => {
        const {firstName, lastName, email, password, passwordConfirmation} = req.body;
        const newArray = {firstName, lastName, email, password, passwordConfirmation}
        try{
            const newUser = await User.create(newArray)

            const saveToken = {
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                email: newUser.email,
                id : newUser._id
            }
            jwt.sign(saveToken,SECRET, {expiresIn : "1m"}, /*Callback */ (err,token)=> {
                return res.status(201).json({token})
            })


        }catch(e){
            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }
            return res.status(400).json({errors: {...messages}})
        }

    },
    login : async (req,res)=> {
        const {email, password} = req.body;
        const currentUser = await User.findOne({email});
        if(!currentUser){
            return res.status(404).json({errors : {email : "THe email does not exist"}})
        }
        const bcryptResponse = await bcrypt.compare(password, currentUser.password)

        if(!bcryptResponse){
            return res.status(404).json({errors : {password : "The credentials do not match"}})
        }

        const saveToken = {
                firstName : currentUser.firstName,
                lastName : currentUser.lastName,
                email: currentUser.email,
                id : currentUser._id
            }
        jwt.sign(saveToken,SECRET, {expiresIn : "1m"}, /*Callback */ (err,token)=> {
                return res.status(201).json({token})
            })

    }
}


export default userController;
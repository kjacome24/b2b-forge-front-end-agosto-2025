import {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const BD = process.env.BD;
// const BD2 = process.env.BD2;


const connectDb = async ()=>{
    try{
        await connect(BD)
        // await connect(BD2,{dbName: 'db_personas'})
        console.log(`The BD was succesfully connected to the backend`)

    }catch(e){
        console.log(`there was an error ${e}`)
    }
}


export default connectDb;
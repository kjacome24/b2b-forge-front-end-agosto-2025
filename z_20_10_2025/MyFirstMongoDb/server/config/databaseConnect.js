import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const BD = process.env.BD;


const connectToDb = async ()=>{
    try{
        await connect(BD)
        console.log(`The DB is connected`)
    }catch(e){
        console.log(`there is an error: ${e}`)
    }
}

export default connectToDb;
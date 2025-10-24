import {connect} from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

const BD = process.env.BD;


const toConnectToBd = async ()=>{
    try{
        await connect(BD)
        console.log(`The bd is up and connected`)
    }catch(e){
        console.log(`the bd had issues`,e)
    }
}


export default toConnectToBd;
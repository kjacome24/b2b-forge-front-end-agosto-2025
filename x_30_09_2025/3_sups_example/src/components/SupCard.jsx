import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import { useState } from 'react'
import styles from './../css/SupCard.module.css'

const SupCard = ({name, description, likes, color, index}) =>{
    const [numeroLikes, setNumeroLikes] = useState(likes)
    const textOnBg = ["warning", "light", "info"].includes(color)? "text-dark" : "text-white";

    return (
        <div key={index} className={`card bg-${color} ${textOnBg} ${styles.superCard}`}>
            <div className='card-header'> <strong>{name}</strong>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhjM2VvNzMzc2M3eDczdDhvMnBpM2RobXhieWN1bzZ5eWFiZXVuMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lTLV2erK8vf1MIz4Rk/giphy.gif" alt="bataman" />
            </div>  
            <div className='card-body'>{description}</div>
            <div className='card-footer'>
                {numeroLikes==0? <button disabled onClick={()=> setNumeroLikes(numeroLikes +1)}>{numeroLikes} like(s)</button>: <button onClick={()=> setNumeroLikes(numeroLikes +1)}>{numeroLikes} like(s)</button>}

            </div>
        </div>
    )
} 


export default SupCard;
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Nieto = ()=> {
    const context = useContext(AppContext)

    return(
        <div>
            <p>Este es el mensaje del nieto</p>
            <strong>{context.message} en el nieto</strong>                
        </div>
    )
}

export default Nieto;

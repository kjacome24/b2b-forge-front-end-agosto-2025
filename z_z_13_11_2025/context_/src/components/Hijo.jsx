import { useContext } from "react";
import Nieto from "./Nieto";
import AppContext from "../context/AppContext";

const Hijo = ()=> {
    const context = useContext(AppContext)

    return(
        <div style={{border: "2px solid red"}}>
            <p>Este es el mensaje del hijo</p>
            <strong>{context.message} en el hijo</strong>                


            < Nieto />
        </div>
    )
}

export default Hijo;

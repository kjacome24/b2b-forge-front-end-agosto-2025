import { useState,useContext } from "react";
import AppContext from "../context/AppContext";
const FormMessage = () => {

    const context = useContext(AppContext)
    const [state, setState] = useState("")

    const changeState = (e)=> {
        e.preventDefault()
        context.setMessage(state)
    }

    return(
        <form onSubmit={e=> changeState(e) }>
            <label htmlFor="message">Message:</label>
            <input type="text" name="message" id="message" value={state} onChange={e=> setState(e.target.value)}/>
            <button >Change</button>
        </form>
    )
}

export default FormMessage;
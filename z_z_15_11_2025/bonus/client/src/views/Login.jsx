import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin}) =>{
    const [state, setState] = useState({
        email : '',
        password : ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const updateState = (e)=>{
        setState({...state, [e.target.name] : e.target.value})
    }


    const loginProcess = (e)=>{
        e.preventDefault();
        const URL= 'http://localhost:8000/api/users/login'
        axios.post(URL,state).then(
            // defintion of the token in localstorage
            response => {
                localStorage.setItem("token", response.data.token)
                setLogin(true)
                setErrors({})
                navigate('/foros')
            }
        ).catch(e=> setErrors(e.response.data.errors))
    }

    return (
        <form onSubmit={e => loginProcess(e)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={state.email} onChange={(e)=> updateState(e)}/>
                {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={state.password} onChange={(e)=> updateState(e)}/>
                {errors.password && <p style={{color : "red"}}>{errors.password}</p>}
            </div>
            <button>Log in</button>
        </form>
    )
}


export default Login;
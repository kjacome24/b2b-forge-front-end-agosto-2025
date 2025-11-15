import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = ({setLogin})=> {
    const navigate = useNavigate();
    const [state, setState] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        passwordConfirmation : '',
    })
    const [errors, setErrors] = useState({})

    const updateState = (e)=>{
        setState({...state, [e.target.name] : e.target.value})
    }

    const registerUser = (e)=>{
        e.preventDefault()
        const URL = 'http://localhost:8000/api/users/new'
        axios.post(URL,state).then(
            response => {
                localStorage.setItem("token",response.data.token)
                setLogin(true)
                setErrors({})
                navigate('/foros')
            }
        ).catch(e=> setErrors(e.response.data.errors))
    }


    return(
        <form onSubmit={e=> registerUser(e)}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" value={state.firstName} onChange={(e)=> updateState(e)}/>
                {errors.firstName && <p style={{color : "red"}}>{errors.firstName}</p>}
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" value={state.lastName} onChange={(e)=> updateState(e)}/>
                {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
            </div>
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
            <div>
                <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={state.passwordConfirmation} onChange={(e)=> updateState(e)}/>
                {errors.passwordConfirmation && <p style={{color : "red"}}>{errors.passwordConfirmation}</p>}
            </div>
            <button>Register</button>
        </form>
    )

}


export default Register;
import { useState } from "react";

const SupForm = ({listSups,setlistSups})=> {
    const arrayData = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    }

    const [state, setState] = useState(arrayData)
    const [errors,setErrors] = useState(arrayData)

    const updateState = (e)=> {
        setState({...state, [e.target.name]: e.target.value})
        console.log(e.target.type)
    }

    const crearSup = (e)=>{
        e.preventDefault();
        const errorsCopy = {...errors}
        state.name.length < 4? (errorsCopy.name = "The element should have at least 4 characters") : (errorsCopy.name ="");
        state.lastName.length < 4? (errorsCopy.lastName = "The element should have at least 4 characters") : (errorsCopy.lastName ="");
        state.password != state.passwordConfirmation ? (errorsCopy.passwordConfirmation= 'The password confirmation is not the same passwrod'): (errorsCopy.passwordConfirmation='')
        state.email.length < 10 || !state.email.includes('@') ? (errorsCopy.email="THe email should hace at least 10 characters and also have an @") : (errorsCopy.email='');

        const specialCharactersRegex = /[!@#$%^&*()\-_=+\[\]{};:'"\\|,.<>\/?`~]/;
        const capitalLettersRegex = /[A-Z]/;
        state.password.length < 12 || !specialCharactersRegex.test(state.password) || !capitalLettersRegex.test(state.password)? errorsCopy.password = "THe password should have at least 12 characters, one special character and one character in upper letters" : errorsCopy.password =''

        if (errorsCopy.name  || errorsCopy.lastName  || errorsCopy.email  || errorsCopy.email  || errorsCopy.password || errorsCopy.passwordConfirmation){
            setErrors(errorsCopy)
            return;
        }



        // ejecucion de agregar sup
        setlistSups([...listSups, state])
        setState(arrayData)
        setErrors(arrayData)
    }

    return(
        <>
            <h3>Registro de superHeroes</h3>
            <form onSubmit={(e)=> crearSup(e)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="input-group-text" type="text" id="name" name="name" value={state.name} onChange={(e)=> updateState(e) } />
                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input className="input-group-text" type="text" id="lastName" name="lastName" value={state.lastName}  onChange={(e)=> updateState(e) }/>
                    {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input className="input-group-text" type="text" id="email" name="email" value={state.email}  onChange={(e)=> updateState(e) }/>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input className="input-group-text" type="password" id="password" name="password" value={state.password}  onChange={(e)=> updateState(e) }/>
                    {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="passwordConfirmation">Password confirmation:</label>
                    <input className="input-group-text" type="password" id="passwordConfirmation" name="passwordConfirmation" value={state.passwordConfirmation}  onChange={(e)=> updateState(e) }/>
                    {errors.passwordConfirmation && <p style={{color: "red"}}>{errors.passwordConfirmation}</p>}
                </div>
                <br />
                <button className="btn btn-primary">Add sup</button>
            </form>
        </>
    )
}

export default SupForm;
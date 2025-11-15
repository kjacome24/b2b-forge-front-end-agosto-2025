import { useState } from "react";

const FormNew = ({addUserToArray})=>{
    const [datUser,setDataUser] = useState({
        name : ''
    }) 

    const updateState = (e)=> {
        setDataUser({...datUser, [e.target.name]: e.target.value})
    }

    const addUser = (e)=> {
        e.preventDefault()
        addUserToArray(datUser)
    }

    return (
        <form onSubmit={e=> addUser(e)}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={datUser.name} onChange={(e)=> updateState(e)} />
            <button>Add user</button>
        </form>
    )
}

export default FormNew;
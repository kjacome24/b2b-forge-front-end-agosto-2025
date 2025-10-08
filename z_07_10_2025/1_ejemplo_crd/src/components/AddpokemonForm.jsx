import { useState } from "react";
const AddpokemonForm = ({setListaPokemon,listaPokemon}) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [nameError,setNameError] = useState('')
    const [typeError, setTypeError] = useState('')
    const [errorMessages, seterrorMessages] = useState({name: '', type: ''})

    const agregarPokemon =(e)=>{
        e.preventDefault()
        const errores = {...errorMessages}

        name == ''? setNameError('El input de nombre esta vacio'): setNameError('')
        type == ''? setTypeError('Debes seleccionar una de las opciones') : setTypeError('')
        name == ''? errores.name = "El input de nombre esta vacio" : errores.name = '';
        type == ''? errores.type = "Debes seleccionar una de las opciones": errores.type='';



        if (!name || !type){
            seterrorMessages(errores)
            alert(errorMessages.name + ", " +  errorMessages.type)
            return;
        }


        setListaPokemon([...listaPokemon, {name,type}])
    }

    return(
    <form onSubmit={(e)=> agregarPokemon(e)}>
        <div>
            <label htmlFor="name">Pokemon's name:</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            {errorMessages.name && <p style={{color: "red"}}>{errorMessages.name}</p>}
            {nameError && <p style={{color: "red"}}>{nameError}</p>}
        </div>
        <div>
            <hr />
            <select name="type" id="type" value={type} onChange={(e)=> setType(e.target.value)}>
                <option value="All">---</option>
                <option value="Electric">Electric</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>

            </select>
                {errorMessages.type && <p style={{color: "red"}}>{errorMessages.type}</p>}
                {typeError && <p style={{color: "red"}}>{typeError}</p>}
            <hr />
        </div>
        <button className="btn btn-warning">Agregar</button>
    </form>
    )

}

export default AddpokemonForm;
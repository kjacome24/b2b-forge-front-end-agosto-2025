import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewForo = ({me, listaForos, setlistaForos,logOut,login}) => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        title : "",
        description : "",
        category : "",
        author : me.firstName 
    })
    const [errors,setErrors] = useState({})

    const sendData = (e) => {
        e.preventDefault()
        const URL = 'http://localhost:8000/api/foros/new'
        axios.post(URL,data, {headers : {token_user : localStorage.getItem("token")}}).then(
            response => {
                setlistaForos([...listaForos, response.data])
                navigate('/foros')
            }

        ).catch(
            e => {
                if(e.status == 406){
                    logOut()
                }
                setErrors(e.response.data.errors)
            }
        )
    }

    const updateState = (e) =>{
        setData({...data,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        if(!login){
            logOut()
        }
    },[login])

    return(
        <>
            <form onSubmit={ e=> sendData(e)}>
                <div>
                    <label htmlFor="title">Titulo: </label>
                    <input type="text" name='title' value={data.title} onChange={e=> updateState(e)} />
                    {errors?.title && <p style={{color: "red"}}>{errors.title}</p>}
                </div>
                <div>
                    <label htmlFor="description">Descripcion: </label>
                    <input type="text" name='description' value={data.description} onChange={e=> updateState(e)} />
                    {errors?.description && <p style={{color: "red"}}>{errors.description}</p>}
                </div>
                <div>
                    <label htmlFor="category">Categoria/tema: </label>
                    <input type="text" name='category' value={data.category} onChange={e=> updateState(e)} />
                    {errors?.category && <p style={{color: "red"}}>{errors.category}</p>}
                </div>
                <button>Agregar</button>
            </form>
        </>
    )
}

export default NewForo;
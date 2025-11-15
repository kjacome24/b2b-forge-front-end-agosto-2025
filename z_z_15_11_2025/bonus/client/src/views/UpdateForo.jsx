import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateForo = ({me, listaForos, setlistaForos,logOut, setLogin}) => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [data,setData] = useState({
        title : "",
        description : "",
        category : ""

    })
    const [errors,setErrors] = useState({})

    const sendData = (e) => {
        e.preventDefault()
        const URL = `http://localhost:8000/api/foros/update/${id}`
        axios.put(URL,data, {headers : {token_user : localStorage.getItem("token")}}).then(
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
        const URL = `http://localhost:8000/api/foros/${id}`
        axios(URL,{headers : {token_user : localStorage.getItem("token")}}).then(
            response => {
                setData(response.data)
                setLogin(true)
                setErrors({})
            }
        ).catch(
            e => {
                if(e.status==406){
                    logOut();
                }
                setErrors(e.response.data.errors)
            }
        )
            

        
    },[])

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
                <button>Editar</button>
            </form>
        </>
    )
}

export default UpdateForo;
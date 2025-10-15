import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const ExtractDataRickMorty = ({setList}) => {
    const [error,setError] = useState({})

    const getData =  ()=>{
        const URL = 'https://rickandmortyapi.com/api/character'
           
        // try{
        //     const response = await axios.get(URL)
        //     setList(response.data.results)
        // }catch(e){
        //     console.log(e)
        //     setError(e)
        // }finally{
        //     console.log("Termine")
        // }
        axios(URL).then(
            response => {
                console.log(response)
                setList(response.data.results)
            }
        ).catch(
            (e)=> {
                console.log(e)
                alert("Hay un error")
            }
        ).finally(()=> console.log("terminado"))
    }

    useEffect(()=>{
        console.log('Se monto el componente y se ejecuto el useEffect')
        getData()
    },[])




    return (
        <div>
            <button onClick={getData}>Mostrar</button>
            {/* {error.response.data.error && <p style={{color: "red"}}>{error.response.data.error}</p>} */}
        </div>
    )
}


export default ExtractDataRickMorty
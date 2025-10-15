const ExtractDataRickMorty = ({setList}) => {

    const getData = async ()=>{
        const URL = 'https://rickandmortyapi.com/api/character'
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setList(data.results)

    }

    return (
        <div>
            <button onClick={getData}>Mostrar</button>
        </div>
    )
}


export default ExtractDataRickMorty
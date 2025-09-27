import reactLogo from './../assets/react.svg'
const Card = ()=> {
//    parte logica
    let nombre = "Anush";
    let edad = 19
//    parte para retunr html 
    return <div className='card'>
        <p>Mi nombre es: {nombre} </p>

        <p>Mi edad es: {edad} </p>
        <img src={reactLogo} alt="react logo" />
    </div>
}

export default Card;
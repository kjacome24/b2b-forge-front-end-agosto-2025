import reactLogo from './../assets/react.svg'
const Card2 = ()=> {
//    parte logica
    let nombre = "Yasmin";
    let edad = 24
//    parte para retunr html 
    return <div className='card2'>
        <p>Mi nombre es: {nombre} </p>

        <p>Mi edad es: {edad} </p>
        <img src={reactLogo} alt="react logo" />
    </div>
}

export default Card2;
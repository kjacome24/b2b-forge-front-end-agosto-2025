import reactLogo from './../assets/react.svg'
const Cardinputs = ({nombre, edad})=> {
//    parte logica
//    parte para retunr html 
    return <div className='card2'>
        <p>Mi nombre es: {nombre} </p>

        <p>Mi edad es: {edad} </p>
        <img src={reactLogo} alt="react logo" />
    </div>
}

export default Cardinputs;
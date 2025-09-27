import reactLogo from './../assets/react.svg'
// const CardinputsProps = (props)=> {

//     return <div className='card2'>
//         <p>Mi nombre es: {props.nombre} </p>

//         <p>Mi edad es: {props.edad} </p>
//         <img src={reactLogo} alt="react logo" />
//     </div>
// }

const CardinputsProps = (props)=> {
    const {nombre, edad} = props
    return <div className='card2'>
        <p>Mi nombre es: {nombre} </p>

        <p>Mi edad es: {edad} </p>
        <img src={reactLogo} alt="react logo" />
    </div>
}


export default CardinputsProps;
import styles from './CardinputsStylos.module.css'

import reactLogo from './../../assets/react.svg'
const CardinputsStylos = (props)=> {

    return <div className={styles.cardEstilos}>
        <p>Mi nombre es: {props.nombre} </p>

        <p>Mi edad es: {props.edad} </p>
        <img src={reactLogo} alt="react logo" />
    </div>
}



export default CardinputsStylos;
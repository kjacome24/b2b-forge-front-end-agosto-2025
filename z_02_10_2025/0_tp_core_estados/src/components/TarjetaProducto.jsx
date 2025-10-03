import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import styles from './../css/TarjetaProducto.module.css'

const TarjetaProducto = (props)=>{
    const [contador, setContador] = useState(props.cantidad)


    return (
        <div className={`card ${styles.tarjetaProducto}`} >
            <strong>{props.nombre}</strong>
            <p className={styles.precio}> ${props.precio}</p>
            <p>{props.descripcion}</p>
            {contador>0? <p className={styles.enStock}>En stock: {contador}</p>: <p className={styles.agotado}>Agotado</p>}
            {contador>0? <button className="btn btn-primary" onClick={()=> setContador( contador - 1)} >Comprar</button> : <button disabled className="btn btn-primary">Comprar</button>}
        </div>
    )
}


export default TarjetaProducto;
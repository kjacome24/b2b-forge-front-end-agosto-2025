import styles from './../css/TarjetaProducto.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const TarjetaProducto = ({nombreProducto, precio, descripcion, enStock})=> {
    return (
    <div className={`card shadow-sm bg-light ${styles.tarjetoProducto}`}>
        <strong>{nombreProducto}</strong>
        <p>$ {precio}</p>
        <p> {descripcion}</p>
        {enStock==true? <p className={styles.enStock}>En Stock</p>: <p className={styles.agotado}>Agotado</p>}
    </div>)
}

export default TarjetaProducto;
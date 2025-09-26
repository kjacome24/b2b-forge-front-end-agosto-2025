// const DetalleListaProps = (props) => {
//     return <li>Hola, mi nombre es {props.nombre} {props.apellido}</li>
// }

const DetalleListaProps = (props) => {
    const {nombre, apellido, edad} = props;
    return <li>Hola, mi nombre es {nombre} {apellido} y tengo {edad}</li>
}

export default DetalleListaProps;
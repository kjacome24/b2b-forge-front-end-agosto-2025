import reactIcon from "../assets/react.svg"

const Persona = (props) => {
    return <div className="persona">
        <p>{props.nombre}</p>
        <p>{props.edad}</p>
        <img src={reactIcon} alt="react icon" />
    </div>
}

export default Persona;
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

const SuperHeroe = (props)=> {
    return (
    <div className="card bg-light">
        <div className="card-header">{props.name}</div>
        <div className="card-body">{props.description}</div>
        <div className="card-footer"> <img src={props.linkImg} alt={props.name} /> </div>
    </div>
    ) 

}


export default SuperHeroe;
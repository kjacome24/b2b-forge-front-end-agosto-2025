import { useNavigate, useParams } from "react-router-dom";
import styles  from './../css/ArtPiece.module.css'

const ArtPiece = ({galeryList})=> {
    const params = useParams();
    const idParams = Number(params.id)
    const navigate = useNavigate();

    
    const artPiece = galeryList.find((art,index)=> index===idParams)

    const anterior = ()=>{
        if(idParams== 0){
            // navigate(`/art/${galeryList.length -1}`)
            navigate('/home')
            return;
        }
        navigate(`/art/${idParams-1}`)
    }

    const siguiente = ()=>{
        if(idParams== (galeryList.length -1)){
            // navigate(`/art/0`)
            navigate('/home')
            return;
        }
        navigate(`/art/${idParams+1}`)
    }

    return(
        <>
        <h1>{artPiece.name}</h1>
        <br />
        <img className={styles.img} src={artPiece.img} alt={artPiece.name} />
        <div>
            <button className={styles.btns} onClick={()=>navigate(`/art/${idParams-1}`)} className="btn btn-success" disabled={idParams===0}>Anterior</button>
            <button className={styles.btns} onClick={()=>navigate('/home')} className="btn btn-success">Inicio</button>
            <button className={styles.btns} onClick={()=>navigate(`/art/${idParams+1}`)} className="btn btn-success" disabled={idParams===(galeryList.length -1)}>Siguiente</button>
            {/* <button onClick={anterior} className="btn btn-success" >Anterior</button>
            <button onClick={()=>navigate('/home')} className="btn btn-success">Inicio</button>
            <button onClick={siguiente} className="btn btn-success">Siguiente</button> */}
        </div>
        </>
    )
}

export default ArtPiece;
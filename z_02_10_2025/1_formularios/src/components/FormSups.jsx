import { useState } from "react";

const FormSups = ({agregarSupsAppjsx}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [linkImg, setLinkImg] = useState("")

    const agregarSupsForm = (e)=> {
        e.preventDefault();
        agregarSupsAppjsx(name,description, linkImg)
    }
    
    return (
        <form onSubmit={(e)=> agregarSupsForm(e)}>
            <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description">Desciprtion:</label>
                <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="linkImg">Link IMG:</label>
                <input type="text" name="linkImg" id="linkImg" value={linkImg} onChange={(e)=>setLinkImg(e.target.value)}/>
            </div>
            <div>
                <button className="btn btn-success">Agregar Super</button>
            </div>
        </form>
    )
}


export default FormSups;
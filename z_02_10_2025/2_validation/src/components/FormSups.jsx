import { useState } from "react";

const FormSups = ({agregarSupsAppjsx}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [linkImg, setLinkImg] = useState("")
    const [errores, setErrores] = useState({name: "", description: "", linkImg: ""})

    const agregarSupsForm = (e)=> {
        // prevenir companrtimiento refresh automatico
        e.preventDefault();

        // validaciones
        let nameValidator = "";
        let descriptionValidator = "";
        let linkImgValidator = "";


        if (name==""){
            nameValidator = "No estas ingresando los valores para name";
        }
        if (description==""){
            descriptionValidator = "No estas ingresando los valores para description"
        }
        if (linkImg==""){
            linkImgValidator = "No estas ingresando el link de imagen"
        }
        if (name.length < 4) {
            nameValidator = "El nombre debe tener por lo menos 4 digitos";

        }





        if(name=="" || description=="" || linkImg=="" || name.length < 4) {
            setErrores({ "name": nameValidator, "description": descriptionValidator, "linkImg": linkImgValidator })
            return;
        }


        // Agrgamos el nuevo objeto si no hay incompletos o errores de validacion
        agregarSupsAppjsx(name,description, linkImg)

        // reseteo de varibalea
        setName("")
        setDescription("")
        setLinkImg("")
        setErrores({name: "", description: "", linkImg: ""})

    }
    
    return (
        <form onSubmit={(e)=> agregarSupsForm(e)}>
            <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                {errores.name? <p>{errores.name}</p> : ""}
                {/* { errores.name && <p>{errores.name}</p> } */}
                {}
            </div>
            <div className="mb-3">
                <label htmlFor="description">Desciprtion:</label>
                <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                {errores.description? <p>{errores.description}</p> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="linkImg">Link IMG:</label>
                <input type="text" name="linkImg" id="linkImg" value={linkImg} onChange={(e)=>setLinkImg(e.target.value)}/>
                {errores.linkImg? <p>{errores.linkImg}</p> : ""}
            </div>
            <div>
                <button className="btn btn-success">Agregar Super</button>
            </div>
        </form>
    )
}


export default FormSups;
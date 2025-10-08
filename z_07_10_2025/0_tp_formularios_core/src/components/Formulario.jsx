import React, { useState } from 'react';


const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [errorNombre, setErrorNombre] = useState('');
    const [listaNombres, setListNombres] = useState([])


    console.log()

    const cargarNombre = (e) => {
        e.preventDefault();
        if(nombre<4){
            setErrorNombre("El nombre es muy cortor");
            return;
        }
        setListNombres([...listaNombres, nombre])
        setNombre('');
    }

    const manejarCambioNombre = (evento) => {
        const valor = evento.target.value;
        setNombre(valor);

    };

    return (
        <div>
            <form onSubmit={(e)=> cargarNombre(e) }>
                <div>
                    <h2>Formulario</h2>
                    <div className="campo">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={manejarCambioNombre}
                            className={errorNombre ? 'error' : ''}
                        />
                        {/* {errorNombre ?  <p className="mensaje-error">Por favor, introduce tu nombre.</p> : ""} */}
                        {errorNombre && <p className="mensaje-error">Por favor, introduce tu nombre.</p>}
                    </div>
                </div>
                <button className='btn btn-danger'>Ingresar</button>
            </form>
            <ol>
                {listaNombres.map(nombre => <li>{nombre}</li>)}
            </ol>
        </div>


        

    );
};

export default Formulario;
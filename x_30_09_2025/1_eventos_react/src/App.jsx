import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

function App() {
  // logica
  const impresion = ()=> {
    console.log("Tu propia funcion esta funcionando")
  }

  const contador = 0;
  const contar = () => {
    contador + 1;
    console.log(contador)
  }

  //return html
  return (
    <>
      <h1>OnClick</h1>
      <button onClick={()=>console.log("El buton esta funcionando!")}>onClick</button>
      <button onClick={()=> alert("El boton esta funcionando")}>Onclick Alert </button>
      <hr />
      <h1>OnmouseEnter & OnMouseout</h1>
      <div style={{border: "2px solid white", height: "2rem"}} onMouseEnter={()=> console.log("Adentro")} onMouseOut={()=> console.log("Afuera")}></div>
      <hr />
      {/* <h1>Onchange</h1>
      <label htmlFor="gender">Genero:</label>
      <select name="gender" id="gender" onChange={()=> alert("Cambiamos el selector")}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Other</option>
      </select> */}
      <h1>Onchange</h1>
      <label htmlFor="gender">Genero:</label>
      <select name="gender" id="gender" onChange={(e)=> alert(`Seleccionaste: ${e.target.value}`)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Other</option>
      </select>
        <hr />
        <h1>Oninput</h1>
        <label htmlFor="nombre"></label>
        <input type="text" name='nombre' id="nombre" onInput={(e)=> console.log(e.target.value) }/>

        <hr />
        <h1>Ejecucion funcion propia</h1>
        {/* <button onClick={()=> impresion()}>Ejecutar</button> */}
        <button onClick={impresion}>Ejecutar</button>

        <hr />
        <h1>Ejemplo como no funciona un contador</h1>
        <p>{contador}</p>
        <button onClick={()=>contar()}>Contar</button>

    </>
  )
}

export default App

import './App.css'

function App() {
  // Programing logic
  let nombre = "Yasmin";
  let edad = 24;
  let hobies = ["Correr","Nadar","Jogar tenis"]
  let objetTest = {name: "xx"}
  //Retorno de html
  return (
    <>
      <h1>Hola {nombre}!</h1>
      <p>Mi edad es: {edad}</p>
      <p>{hobies}</p>
      {/* <p>{objetTest}</p> */}
    </>
  )
}

export default App

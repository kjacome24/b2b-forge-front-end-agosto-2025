import './App.css'
import TarjetaProducto from './components/TarjetaProducto'

function App() {


  return (
    <>
      < TarjetaProducto nombreProducto="Laptop" precio={1000} descripcion="Una gran laptop" enStock={true}/>
      < TarjetaProducto nombreProducto="Smartphone" precio={500} descripcion="Smartphone para conectar con otros" enStock={false}/>
      < TarjetaProducto nombreProducto="Auriculares" precio={100} descripcion="Tu opcion para escuchar musica" enStock={true}/>
      < TarjetaProducto nombreProducto="Monitor" precio={300} descripcion="Extra screen para programar" enStock={true}/>
    </>
  )
}

export default App

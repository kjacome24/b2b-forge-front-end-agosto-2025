import './App.css'
import TarjetaProducto from './components/TarjetaProducto'

function App() {
  const productos = [
    {nombre: "Laptop", precio: 1500, descripcion: "Una potente latop para trabajar y jugar", cantidad: 10},
    {nombre: "Smartphone", precio: 800, descripcion: "Un smarthphone de ultima generacion", cantidad: 0},
    {nombre: "Auriculares", precio: 200, descripcion: "Auriculares conc ancelacion de ruido", cantidad: 5},
    {nombre: "Monitor", precio: 300, descripcion: "Modito 4k para ver mejor", cantidad: 10},
  ]

  return (
    <>
      <div><h1>TechStore - Tudestino para la mejor tecnologia</h1></div>
      <div className='porductsCards'>
        {productos.map((producto)=> < TarjetaProducto nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} cantidad={producto.cantidad}/> )}
      </div>
    </>
  )
}

export default App

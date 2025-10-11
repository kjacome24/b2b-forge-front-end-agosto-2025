import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"; // <-- import bootstrap here
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional, for JS components like modals
import ArtPiece from './components/ArtPiece';

function App() {
  const galeryList = [
    {name: 'Fuera de este Mundo', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Pacientes Holograficos', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4y6DqPvlICp5S/giphy.gif' },
    {name: 'Lo Alto de dinero', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HWLa2UnmEsc2qpYu8f/giphy.gif' }, 
    {name: 'Nada como la privacidad del hogar', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Moverse en la ciudad', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' },  
    {name: 'Diversion de otro planeta', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Espectaculo de la Galaxia', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }, 
    {name: 'Taxista', author: 'Kevin J', img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhsYm5hYzh1N2RpaGh3NWs5MHFnZm00d2pqMnZhaWxmdWt2ZzgzaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M52wyuahvQfJK/giphy.gif' }

  ]

  return (
    <>
      < Routes>
        < Route path='/' element={ < Navigate to="home" />}></Route>
        < Route  path='/home' element={ < Home galeryList={galeryList}/> }></Route>
        < Route path='/art/:id' element={ < ArtPiece galeryList={galeryList} /> }></Route>
      </Routes>
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import NotesForm from './components/NotesForm'
import { use, useState } from 'react'
import Filter from './components/Filter'
import Note from './components/Note'

function App() {
  const [listnotes, setlistNotes] = useState([])
  const [filter, setFilter] = useState('')

  const listFiltered = !filter? listnotes :listnotes.filter(note=> note.priority==filter) 

  return (
    <div className='card' style={{width: '20rem'}}>
        <div className='card-header'>
            <h1>Notas</h1>
            < NotesForm listnotes={listnotes} setlistNotes={setlistNotes}/>
        </div>
        <div className='card-body'>
          < Filter filter={filter} setFilter={setFilter}/> 
          <hr />
          {listFiltered.map((note,index)=> <Note note={note.note} priority={note.priority} listnotes={listnotes} setlistNotes={setlistNotes} index={index}/> )}
        </div>
        <div className='card-footer'></div>
    </div>
  )
}

export default App

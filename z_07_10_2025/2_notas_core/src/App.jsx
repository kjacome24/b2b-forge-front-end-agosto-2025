import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

import './App.css'
import NotesForm from './components/NotesForm'


function App() {









  return (
    <div className='card text-white bg-dark mb-3' style={{width: '500px'}}>
      <div className='card-header'>
        <h1>Notes: </h1>
        < NotesForm /> 
      </div>
      <h1>ddd</h1>
    </div>
  )
}

export default App

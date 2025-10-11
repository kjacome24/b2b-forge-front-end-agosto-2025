import "bootstrap/dist/css/bootstrap.min.css"; // <-- import bootstrap here
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional, for JS components like modals
import './App.css'
import SupForm from "./components/SupForm";
import { useState } from "react";

function App() {
  const [listSups,setlistSups] = useState([])

  return (
    <>
      <header>
        <h1>Bienvenido a la liga de superheroes</h1>
      </header>
      <main>
        < SupForm  listSups={listSups} setlistSups={setlistSups}/> 
      </main>
      <footer>
        {/* {listSups.map((sup,index)=> 
        <div key={index} className="card bg-warning"><p>{sup.name}</p></div>)} */}
        <br/>
        <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>  
            <tbody>
              {listSups.map((sup,index)=> 
              <tr>
                <td>{sup.name}</td>
                <td>{sup.lastName}</td>
                <td>{sup.email }</td>
              </tr>)}
            </tbody>

        </table>


      </footer>
    </>
  )
}

export default App

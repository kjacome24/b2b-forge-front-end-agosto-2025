import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      < Card /> 
      <Card>
        <p>Parrafo del padre</p>
        <ol>
          <li>Uno</li>
        </ol>
      </Card>
    </>
  )
}

export default App

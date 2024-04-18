import {useState} from 'react'
import "./App.css"
import BoxColor from './components/BoxColor';
import MyForm from './components/MyFormChallenge';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function App() {
  const [value, setValue] = useState('')


  return (
    <>
    <h3>Colors</h3>
    <MyForm value={value} setValue={setValue}/>

    <div className='container'>
      {colors.map((color, index) => (
        <BoxColor key={index} color = {color} value = {value}/>
      )
      )}
    </div>

    </>
  )
}

export default App
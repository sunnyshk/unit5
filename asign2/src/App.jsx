import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const data = ["Android","Blackberry","iPhone","Windows Phone"];
  const data2 = ["Samsung", "HTC", "Micromax", "Apple"]
  let nav = ["Services","Project","About"]
  return (
  <div className="App">
    <h1>Mobile Operating System</h1>
    <ul>
        {
          data.map((e)=>(
            <li>{e}</li>
          ))
        }
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {
         data2.map((e)=>(
           <li>{e}</li>
         ))
        }
      </ul>

      <div className="nav">
        <h1>JUNED</h1>
        <div className="flex">
          <ul>
            {
              nav.map((e)=>(
                <li>{e}</li>
              ))
            }
          </ul>
        </div>
      </div>
  </div>

  
  )
}

export default App

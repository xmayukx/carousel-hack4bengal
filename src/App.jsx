import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './Card'
import events from "./data";
import Carousal2 from "./Carousal2"
function App() {

  // console.log(events);
  return (
    <div className="App">
     
      <Carousal2/>
    </div>
  )
}

export default App

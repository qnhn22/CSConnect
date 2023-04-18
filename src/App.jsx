import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Feed from './components/Feed'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Feed />
    </div>
  )
}

export default App

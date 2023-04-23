import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default App

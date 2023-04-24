import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default App

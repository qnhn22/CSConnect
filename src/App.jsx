import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className='outlet'>
        <Outlet context={[searchInput, setSearchInput]} />
      </div>
    </div>
  )
}

export default App

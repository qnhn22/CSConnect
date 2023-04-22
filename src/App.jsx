import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import New from './routes/New'
import Update from './routes/Update'
import PostDetail from './routes/PostDetail'

function App() {

  return (
    <div className="App">
      <NavBar />
      <PostDetail />
      {/* <Feed />
      <New />
      <Update /> */}
    </div>
  )
}

export default App

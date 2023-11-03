import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext } from './context/TodoContext'
import { Home } from './pages/Home'

function App() {
  

  return (
    <>
    <TodoContext>
      <Home/>
    </TodoContext>
    </>
  )
}

export default App

import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import './App.css'

function App() {

  return (
    <>
    <h1 className="bg-cyan-600 font-bold text-2xl text-black rounded">Redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
  </>
  )
}

export default App

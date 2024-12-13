import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  const [input, setInput] = useState('')
  const [isUpdating,setisUpdating]=useState(false)
  return (
    <>
      <h1>Learning redux Toolkit</h1> 
      <AddTodo input={input} setInput={setInput} isUpdating={isUpdating} setisUpdating={setisUpdating}/>
      <Todos setInput={setInput} isUpdating={isUpdating} setisUpdating={setisUpdating}/>
    </>
  )
}

export default App

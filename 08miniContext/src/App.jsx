import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    // Now the components you will use here will have access UserContext variables , which is handled in component.
    <UserContextProvider>
      <h1>Chai aur React </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

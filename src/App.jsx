import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/register'
import { ToastContainer } from 'react-toastify'
import Profile from './components/profile'
import { auth } from './components/firebase'

function App() {
  const [user, setUser] = useState(0);
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  },[])

  return (
    <div>
      <Routes>
          <Route path='/' element={ user ? <Navigate to="/profile" /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App

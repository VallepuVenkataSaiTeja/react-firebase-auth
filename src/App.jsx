import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AuthPage from './pages/private-route'
import ProfilePage from './pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
     <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/profile' element={<AuthPage>
          <ProfilePage />
        </AuthPage>} />
     </Routes>

      <h1>React Firebase Auth App</h1>
   </div>
  
  )
}

export default App

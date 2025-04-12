import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserLinkPage from './pages/UserLinkPage'
import { Route, Routes } from 'react-router'
import { createContext } from 'react'

const AuthContext = createContext(null);

function App() {
 

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>              
          <Route path="/dashboard" element={<UserLinkPage/>}/>              
          <Route path="/signup" element={<SignupPage/>}/>           
        </Routes>
      <Footer/>   
    </>
  )
}

export default App

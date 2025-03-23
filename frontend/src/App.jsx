import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserLinkPage from './pages/UserLinkPage'
import { Route, Routes } from 'react-router'

function App() {
 

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>              
      <Route path="/links" element={<UserLinkPage/>}/>              
      <Route path="/signup" element={<SignupPage/>}/>              
    </Routes>
  )
}

export default App

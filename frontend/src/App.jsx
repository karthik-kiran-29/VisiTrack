import './App.css'
import LoginPage from './pages/LoginPage'
import UserLinkPage from './pages/UserLinkPage'
import { Route, Routes } from 'react-router'

function App() {
 

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>              
      <Route path="/links" element={<UserLinkPage/>}/>              
    </Routes>
  )
}

export default App

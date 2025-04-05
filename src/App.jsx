import React from 'react'
import Main from './Components/MainPage/Main'
import SecondMain from './Components/MainPage/SecondMain'
import ThirdMain from './Components/MainPage/ThirdMain'
import FrontPage from './Components/MainPage/FrontPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminDashboard from './Components/Dashboard.jsx/AdminDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>

        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App

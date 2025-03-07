// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context';
import Signup from './components/auth/Signup';
import UserDashboard from './components/Dashboard/user/UserDashboard'
import AdminDashboard from './components/Dashboard/admin/AdminDashboard';
import Login from './components/auth/Login'
import Home from './pages/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path='/about' element={<About/>}/>
            <Route  path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
          
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
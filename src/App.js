import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Login from './components/auth/Login'

function App () {
  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App

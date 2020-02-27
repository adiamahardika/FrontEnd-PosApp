import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ onChangeSearch, onLogout }) => {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: 'white' }}>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div className='container'>
                  <div className='col-lg-10'>
                      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                          <ul className='navbar-nav mr-auto' style={{margin:'auto'}}>
                              <li className='nav-item' >
                                  <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif', fontSize:'20px', padding:'10px', color: '#4285f4' }}>The Mahardika FnB</Link>
                              </li>
                          </ul>
                          <form className='form-inline my-3 my-lg-0'>
                              <input className='form-control mr-sm-2' type='text' placeholder='Search Name' aria-label='Search' onChange={onChangeSearch}/>
                          </form>
                      </div>
                  </div>
                  <div className='col-lg-2' >
                      <ul className='navbar-nav mr-auto'>
                          <li className='nav-item' style={{margin:'auto'}}>
                              <Link className='nav-link' to='#'style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif',  fontSize:'20px', padding:'10px', color:'#4285f4'}}>Cart <span className='badge badge-primary badge-pill'>0</span></Link>
                          </li>
                      </ul>
                  </div>
                  <p>Welcome, {localStorage.getItem('name')} <Link to="#" onClick={onLogout.bind(this)}>Logout</Link></p>
              </div>
          </nav>
      )
}
export default Navbar

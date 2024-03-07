import React from 'react'
import Logo from '../logo.ico'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
  <>
    <nav>
    <div className='logo'>
 <img src={Logo} alt="Logo" />
 <h4>Explorer Guide</h4>
  </div>
  <div>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/destinations'>Destinations</NavLink></li>
        <li><NavLink to='/unesco-site'>UNESCO Sites</NavLink></li>
        <li><NavLink to='/news'>News</NavLink></li>
    </ul>
  </div>
  <div>
    <button>SignUp</button>
  </div>
    </nav>
  </>
  )
}

export default Header;

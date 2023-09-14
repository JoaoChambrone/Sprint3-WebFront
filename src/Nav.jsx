import {} from 'react'
import { NavLink } from 'react-router-dom'



function Nav(){
  return(
    <>
    <header>
        <nav>
            <h1 id='title'>ELEKSELL</h1>
            <ul className="menu">
              <li><NavLink to="/" className='nav-link'>HOME</NavLink></li>
              <li><NavLink to="/Projeto" className='nav-link'>PROJETO</NavLink></li>
              <li><NavLink to="/Ecommerce" className='nav-link'>E-COMMERCE</NavLink></li>
              <li><NavLink to="/Contato" className='nav-link'>CONTATO</NavLink></li>
              <li><NavLink to="/Login" className='nav-link'>LOGIN</NavLink></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
export default Nav
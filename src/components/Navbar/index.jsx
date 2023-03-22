import React from 'react'
import './Navbar.scss';

const navList = [ 'home', 'chat', 'contacts', 'settings'];

const Navbar = () => {
  return (
    <main>
      <nav>
        <ul className='navbar navbar__list'>
          {navList.map((navItem, index) => 
          <li key={index} className={`navbar navbar__li`}>
            <a href={`#${navItem}`} className={`navbar navbar__a`}>{navItem}</a>
          </li>
          )}
        </ul>
      </nav>
    </main>
  )
}

export default Navbar;


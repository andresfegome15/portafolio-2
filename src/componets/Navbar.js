import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className='nav-items'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-items'>
            <a href='/#/perfil'>About</a>
          </li>
          <li className='nav-items'>
            <a href='/#/producto'>Productos</a>
          </li>
          <li className='nav-items'>
            <a href='/#/contacto'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

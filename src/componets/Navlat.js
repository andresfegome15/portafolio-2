import React from "react";
import "../style/natLat.css";
import "../style/nav.css";
const Navlat = () => {
  return (
    <div className='social-red'>
      <ul>
        <li className='red-items'>
          <a href='https://github.com/andresfegome15'>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li className='red-items-none'>
          <i className='fa-solid fa-angles-left'></i>
        </li>
        <li className='red-items'>
          <a href='https://www.linkedin.com/in/andr%C3%A9s-felipe-401a671ab/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li className='red-items'>
          <a href='/#/contacto'>
            <i className='fa-solid fa-handshake'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navlat;

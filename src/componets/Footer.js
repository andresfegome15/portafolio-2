import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <ul className='container-enlace'>
          <li className='red-items'>
            <a href='https://github.com/andresfegome15'>
              <i className='fa-brands fa-github'></i>
            </a>
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

        <h2>Andrés Gonzalez</h2>
        <h4>Full stack developer</h4>
      </div>
    </footer>
  );
};

export default Footer;

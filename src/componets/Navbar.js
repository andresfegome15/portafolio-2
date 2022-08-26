import React from "react";
import andres from "../img/andres.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const [active, setactive] = useState("");

  const submit = data => {
    axios
      .post("https://portafolio-developer.herokuapp.com/api/v1/contactos", data)
      .then(() =>
        alert(
          `Hola, ${data.name} gracias por contactar, te llegara un mensaje al email ${data.email}`
        )
      )
      .catch(error => console.log(error));
  };

  const thema = () => {
    setactive(!active);
    document.body.classList.toggle("darck");
    document.querySelector("ul.ul-nav").classList.toggle("darck");
    document.querySelector("div.welcome").classList.toggle("darck");
    document.querySelector("div.perfil").classList.toggle("darck");
    document.querySelector("div.info").classList.toggle("darck");
    document.querySelector("div.contactos").classList.toggle("darck");
    document.querySelector("div.container-footer").classList.toggle("darck");
    document.querySelector("div.social-red").classList.toggle("darck");
  };

  return (
    <>
      <header>
        <input type='checkbox' name='' id='check-nav-bar' />
        <label htmlFor='check-nav-bar' className='menu-hamburguesa'>
          <i className='fa-solid fa-bars'></i>
        </label>
        <div className='header'>
          <div className='container-perfil-menu'>
            <a href='https://github.com/andresfegome15'>
              <i className='fa-brands fa-github'></i>
            </a>
            <img src={andres} alt='' />
            <a href='https://www.linkedin.com/in/andr%C3%A9s-felipe-401a671ab/'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>

          <nav>
            <ul className='ul-nav'>
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
              <button
                className={"switch " + active}
                id='switch'
                onClick={() => thema()}
              >
                <span>
                  <i className='fa-solid fa-sun'></i>
                </span>
                <span>
                  <i className='fa-solid fa-moon'></i>
                </span>
              </button>
            </ul>
            <form
              className='form-nav'
              action=''
              onSubmit={handleSubmit(submit)}
            >
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtname'
                  type='text'
                  required
                  placeholder=' '
                  {...register("name")}
                />
                <label htmlFor='txtname' className='form-label'>
                  Name:
                </label>
              </div>
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtemail'
                  type='text'
                  required
                  placeholder=' '
                  {...register("email")}
                />
                <label htmlFor='txtemail' className='form-label'>
                  Email:
                </label>
              </div>
              <div className='form-group'>
                <input
                  className='form-input'
                  id='txtmessage'
                  type=''
                  required
                  placeholder=' '
                  {...register("mensaje")}
                />
                <label htmlFor='txtmessage' className='form-label'>
                  Mensaje:
                </label>
              </div>
              <button type='submit'>Contactar</button>
            </form>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

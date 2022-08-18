import React from "react";
import andres from "../img/andres.png";
import axios from "axios";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const { register, handleSubmit } = useForm();

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

  return (
    <>
      <input type='checkbox' name='' id='check-nav-bar' />
      <label htmlFor='check-nav-bar' className='menu-hamburguesa'>
        <i class='fa-solid fa-bars'></i>
      </label>
      <header>
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
          <form className='form-nav' action='' onSubmit={handleSubmit(submit)}>
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
      </header>
    </>
  );
};

export default Navbar;

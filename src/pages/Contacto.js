import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    getSugerencia();
    console.log(sugerencias);
  }, [sugerencias]);

  const getSugerencia = () => {
    axios
      .get("https://portafolio-developer.herokuapp.com/api/v1/sugerencias")
      .then(res => setSugerencias(res.data.sugerencia))
      .catch(error => console.log(error.response));
  };
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

  const submitSugerencia = data => {
    axios
      .post(
        "https://portafolio-developer.herokuapp.com/api/v1/sugerencias",
        data
      )
      .then(res => getSugerencia())
      .catch(error => console.log(error));
  };
  return (
    <div className='contactos'>
      <div className='container-contacto'>
        <div className='container-contactar'>
          <h3 style={{ padding: "1rem" }}>¿Trabajemos juntos?</h3>
          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <i className='fa-brands fa-whatsapp'></i>
            <a href='https://www.whatsapp.com/?lang=es'> 3042827183</a>
          </div>
          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <i className='fa-solid fa-envelope'></i>
            <a href='https://outlook.live.com/'> andresgon15.af@hotmail.com</a>
          </div>
        </div>
        <form className='form' action='' onSubmit={handleSubmit(submit)}>
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
      </div>
      <div className='container-all-sugerencia'>
        <form action='' onSubmit={handleSubmit(submitSugerencia)}>
          <textarea
            className='form-input'
            maxLength={250}
            type=''
            name=''
            placeholder='Segerencia'
            id='txtsugerencia'
            {...register("sugerencia")}
          />
          <label htmlFor='txtsugerencia'>Maximo 250 caracteres</label>
          <button className='btnsugerencia' type='submit'>
            sugerir
          </button>
        </form>
        <div className='container-all-items'>
          {sugerencias.map(sugerencia => (
            <div key={sugerencia.id} className='container-sugerencia'>
              <h6>{String(sugerencia.createdAt).slice(0, 10)}</h6>
              <p className='sugerencia'>{sugerencia.sugerencia}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacto;

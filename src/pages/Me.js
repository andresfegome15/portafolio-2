import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../style/me.css";

const Me = () => {
  const [selecto, setSelectContacto] = useState([]);
  const [contacto, setContacto] = useState([]);
  const andres = new Array();
  andres[201] = "felipe";
  console.log(andres.length);
  useEffect(() => {
    contactos();
  }, []);

  const contactos = () => {
    axios
      .get("http://localhost:2000/api/v1/contactos")
      .then(res => setContacto(res.data.contactos))
      .catch(error => console.log(error.response));
  };

  const read = id => {
    axios(`http://localhost:2000/api/v1/contactos/${id}`)
      .then(res => setSelectContacto(res.data.contacto))
      .catch(error => console.log(error.response));
    // for (let i = 0; i < contacto.length; i++) {
    //   if (id === contacto[i].id) {
    //     selecto[0] = contacto[i];
    //   }
    //   console.log(selecto);
    // }
  };
  return (
    <div className='me-container'>
      <div className='personas'>
        {contacto.map(contact => (
          <button key={contact.id} onClick={() => read(contact.id)}>
            <h3>{contact.name}</h3>
          </button>
        ))}
      </div>
      <div className='resultados'>
        <div>
          <h4>{selecto.createdAT}</h4>
          <h1>{selecto?.name}</h1>
          <p>{selecto?.mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default Me;

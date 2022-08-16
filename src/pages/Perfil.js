import React from "react";

const Perfil = () => {
  return (
    <div className='perfil' id='perfil'>
      <div className='photo'>
        <img src='../img/andres.png' alt='' />
      </div>
      <div className='about'>
        <h2>Hola, me llamo Andrés</h2>
        <p>
          Soy desarrollador web full stack, me desenvuelvo en el back-end y en
          el front-end, trati de mantener mis conocimientos actualizados, por
          eso siempre estoy en la busqueda de nuevas tecnologias, actualmente
          para el front trabajo con Vanilla js, React y Angular, por el lado del
          back manejo tranajo con node js y el ORM express, mongo
        </p>
      </div>
    </div>
  );
};

export default Perfil;

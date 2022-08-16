import React from "react";

import js from "../img/js.jpg";
import redux from "../img/redux.png";
import node from "../img/node.png";
import css from "../img/css.png";
import html from "../img/html.png";
import react from "../img/react.png";
import boostrap from "../img/boostrap.jpg";
import pug from "../img/pug.jpg";
import sequelize from "../img/sequelize.png";
import express from "../img/express.png";
import postgress from "../img/postgres.jpg";

const Habilidad = () => {
  return (
    <div className='habilidades'>
      <h3>Habilidades</h3>
      <input type='checkbox' name='' id='check-tecnology' />
      <label htmlFor='check-tecnology'>
        <i className='fa-solid-price fa-solid fa-angle-down'></i>
      </label>
      <div className='fullstack'>
        <div className='front'>
          <h4>Front-end</h4>
          <div className='container-js'>
            <img src={js} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
          <div className='container-js'>
            <img src={redux} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
          <div className='container-js'>
            <img src={react} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
          <div className='container-js'>
            <img src={boostrap} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
          <div className='container-js'>
            <img src={html} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
          <div className='container-js'>
            <img src={css} alt='' className='img-tecnology' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
              possimus ad repellendus veniam tempore consequatur vel illo autem
              nesciunt. Aliquid.
            </p>
          </div>
        </div>
        <div className='back'>
          <div className='front'>
            <h4>Back-end</h4>
            <div className='container-js'>
              <img src={node} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
            <div className='container-js'>
              <img src={js} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
            <div className='container-js'>
              <img src={express} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
            <div className='container-js'>
              <img src={sequelize} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
            <div className='container-js'>
              <img src={pug} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
            <div className='container-js'>
              <img src={postgress} alt='' className='img-tecnology' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                excepturi at nemo, beatae neque ipsam sit ipsa ex recusandae
                possimus ad repellendus veniam tempore consequatur vel illo
                autem nesciunt. Aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidad;

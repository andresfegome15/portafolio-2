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
              Utilizo JavaCrypt para conexión en la interfaz del cliente, me
              ayuda a la manipulación de datos de cualquier tipo, importantes
              para brindar al usuario la información relevante a su interés.
            </p>
          </div>
          <div className='container-js'>
            <img src={redux} alt='' className='img-tecnology' />
            <p>
              React Redux mi método de implementación es para hacer de el una
              tienda para todos los componetes de React, en el almaceno
              información que se guarda y actualiza para mejorar la interfaz del
              usuario.
            </p>
          </div>
          <div className='container-js'>
            <img src={react} alt='' className='img-tecnology' />
            <p>
              React es un framework que me facilita la creación de aplicaciones
              de manera sencilla, además la libertad de usar librerias propias y
              externas que ayuden a mejorar la experiencia del cliente, a mi
              parecer una de las mejores propiedades es el renderizado
              automático al cambiar datos internos.
            </p>
          </div>
          <div className='container-js'>
            <img src={boostrap} alt='' className='img-tecnology' />
            <p>
              Boostrap lo utilizo como una biblioteca de estilos Css, aplicables
              a cualquier framewok. Es de utilidad cuando se requiere rapidéz en
              la entrga. suple la necesidad de extender el codigo css puro.
            </p>
          </div>
          <div className='container-js'>
            <img src={html} alt='' className='img-tecnology' />
            <p>
              HTML se implementa para la maquetación de las paginas, las equitas
              que esta suministran son las encargadas de recoger la informacion
              para despues ser procesada. La estrucutracion en bloque es facil
              de implemntar para darle forma y graficos agradable para el
              cliente
            </p>
          </div>
          <div className='container-js'>
            <img src={css} alt='' className='img-tecnology' />
            <p>
              Css es utilizado para brindarle apariencia y estilar las etiquetas
              Html, estos mismo estilo son los encargados de hacer una pagina
              agradable y colorida, además de animaciones que en los ultimos
              tiempo se ha vuelto casi requisito a implementar.
            </p>
          </div>
        </div>
        <div className='back'>
          <div className='front'>
            <h4>Back-end</h4>
            <div className='container-js'>
              <img src={node} alt='' className='img-tecnology' />
              <p>
                Node.js es el lenguaje que se utiliza en los servidores que se
                controlan por eventos, gracias a la aplicación de subprocesos se
                utiliza en gran parte de los sitios web actuales, tambien brinda
                el servicio de API, este fue diseñado para tener en cuenta la
                arquictectura de push en tiempo real.
              </p>
            </div>
            <div className='container-js'>
              <img src={js} alt='' className='img-tecnology' />
              <p>
                JavasCrypt del lado del backend es la manera de ser interación
                entre el frontend y el backend, este almacena datos ya sea a
                largo plazo o temporables alimentando las bases de datos y las
                extenciones del framework que lo requiera, la variacion de las
                tipologías de variables son de gran ayuda al tratar los datos.
              </p>
            </div>
            <div className='container-js'>
              <img src={express} alt='' className='img-tecnology' />
              <p>
                Express es un entorno que nos ofrece lo necesario para programar
                en el bachend; Este a su vez esta alojado dentro del entorno de
                Node.js. Express permite la utilización de librerías externas,
                es un framewok muy utilizado por su potencia y flexibilidad de
                entorno.
              </p>
            </div>
            <div className='container-js'>
              <img src={sequelize} alt='' className='img-tecnology' />
              <p>
                Sequelize lo utilizo como un ORM para Node.js este se encarga de
                la traduccón de codigo de node a Sql, se podría decir que es el
                enlace cominicativo entre estos dos lenguajes, tambien se
                encarga de la manipulacion de las bases de datos ya sean: Mysql,
                sqlite, postgress entre otras.
              </p>
            </div>
            <div className='container-js'>
              <img src={pug} alt='' className='img-tecnology' />
              <p>
                Pug es un motor de plantilla para Node.js en el cual se es capaz
                de escribir codigo html con una sintaxis mas sencilla y clara,
                mi manera de imlmentarlo es para enviar la plantilla en un
                correo desde el backend.
              </p>
            </div>
            <div className='container-js'>
              <img src={postgress} alt='' className='img-tecnology' />
              <p>
                Postgress en el sistema de gestión de bases de datos, de uso
                libre, es compatible con cualquier uso ya sea personal o de uso
                comercial, en el se podrá acceder los datos hallados en el motor
                de dde datos SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidad;

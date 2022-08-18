import React from 'react';
import Wows from '../exports/wow'
import '../style/slider.css'
import {motion} from 'framer-motion'

const Slider = () => {
    return (
      <div className="productos-container">
        <div className='productos'>
            <h3>Productos</h3>
            
          
        <motion.div className='slider-container'>
            <motion.div className='slider' drag='x' dragConstraints={{right:0, left: -2328}}>
               {
                Wows.map(wow =>(
                    <motion.div key={wow} className='item'>
                        <img src={wow} alt="" /> 
                    </motion.div>
                         
                ))
            } 
            </motion.div>
            
        </motion.div>
        </div>
        
        <div className='container-producto'>
          <div className="proyecto">
            <input type='checkbox' name='' id='id-list-project' />
            <label htmlFor='id-list-project'>
                <h5>Proyectos</h5>
                <i className='fa-solid-price fa-solid fa-angle-down'></i>
            </label>
            <ul className='list-project'>
              <li><a href='https://musical-taffy-ab3837.netlify.app'>E-commerce</a></li>        
              <li><a href='https://unrivaled-unicorn-706cf6.netlify.app'>Pokedex</a></li>
              <li><a href='https://dulcet-stroopwafel-b74a53.netlify.app'>Portafolio Vanilla</a></li>
              <li><a href='https://melodious-empanada-f3b781.netlify.app'>Climapp</a></li>
              <li><a href='https://papaya-toffee-a7c835.netlify.app'>Citas</a></li>
            </ul>
          </div>
          <div className='otras'>
      <div className='container-otras'>
        <h4>Azure</h4>
        <div className='container-por'>
          <div
            style={{
              backgroundColor: "#38b6ff",
              width: "36%",
              height: "10px",
            }}
          ></div>
        </div>
      </div>
      <div className='container-otras'>
        <h4>Heroku</h4>
        <div className='container-por'>
          <div
            style={{
              backgroundColor: "#38b6ff",
              width: "68%",
              height: "10px",
            }}
          ></div>

          <div className='div-heroku'></div>
        </div>
      </div>
      <div className='container-otras'>
        <h4>Fire base</h4>
        <div className='container-por'>
          <div style={{
              backgroundColor: "#38b6ff",
              width: "63%",
              height: "10px",
            }}
          ></div>
        </div>
      </div>
          </div>
        </div>

            
            
      </div>
    );
};

export default Slider;
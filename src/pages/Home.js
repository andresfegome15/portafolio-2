import Slider from "../componets/Slider";
import { Perfil, Contacto, Habilidad } from "./index";

const Home = () => {
  return (
    <>
      <section className='section-main'>
        <div className='welcome'>
          <div className='full-stack'>
            <h4>Welcome</h4>
            <h1>! Soy programador Full stack ¡</h1>
            <br />
            <p>
              Bienvenido, mi nombre es Andres González <br />
              este es mi portafolio, sería un gusto trabajar juntos
            </p>
            <br />
            <br />
            <a
              className='cv'
              href='https://www.canva.com/design/DAFIIMa-zZM/9XZYQezF2pst4YNXj1cx1Q/view?utm_content=DAFIIMa-zZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
            >
              Ver CV
            </a>
            <a
              className='cv mas'
              href='https://www.canva.com/design/DAFIIMa-zZM/9XZYQezF2pst4YNXj1cx1Q/view?utm_content=DAFIIMa-zZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
            >
              Ver más
            </a>
          </div>
        </div>
        <Perfil></Perfil>
        <div className='info'>
          <Habilidad></Habilidad>
          <Slider></Slider>
          <Contacto></Contacto>
        </div>
      </section>
    </>
  );
};

export default Home;

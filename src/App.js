import "./style/nav.css";
import "./style/screen-style.css";
import "./App.css";
import "./style/Home.css";
import "./style/perfil.css";
import "./style/info.css";
import "./style/contacto.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Perfil, Contacto } from "./pages";
import Navbar from "./componets/Navbar";
import Slider from "./componets/Slider";
import Navlat from "./componets/Navlat";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/producto' element={<Slider />} />
        </Routes>
        <Navlat></Navlat>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;

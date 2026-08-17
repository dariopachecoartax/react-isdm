import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const nombreSitio = 'Pixel Store';

const links = ['Inicio', 'Juegos', 'Contacto'];

const tituloPrincipal = 'Juegos destacados';

const descripcion = 'Una selección de clásicos que marcaron época.';

const juegos = ['The Legend of Zelda', 'Metal Slug', 'Age of Empires II'];

function App() {
  return (
    <>
      <Navbar titulo={nombreSitio} links={links} />

      <Main titulo={tituloPrincipal} descripcion={descripcion} items={juegos} />

      <Footer texto="Todos los derechos reservados." anio="2026" />
    </>
  );
}

export default App;

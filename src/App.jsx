import Saludo from './components/Saludo';
import TarjetaPerfil from './components/TarjetaPerfil';
import Contador from './components/Contador';
import ListaTareas from './components/ListaTareas';

const usuario1 = {
  nombre: 'Ada Lovelace',
  rol: 'Pionera de la Programación',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/250px-Ada_Lovelace_portrait.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
};

function App() {
  return (
    <div>
      <Saludo nombre="Valentina" />
      <Saludo nombre="Tomás" />

      <TarjetaPerfil
        nombre={usuario1.nombre}
        cargo={usuario1.rol}
        imagen={usuario1.foto}
      />

      <TarjetaPerfil
        nombre="Grace Hopper"
        cargo="Inventora del compilador"
        imagen="https://mujeresconciencia.com/app/uploads/2020/01/800px-Commodore_Grace_M._Hopper_USN_covered_head_and_shoulders_crop-768x1021.jpg"
      />

      <Contador />
      <ListaTareas />
    </div>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/NavBar";
import Producto from './components/Producto';
import ListadoDeProductosContainer from './components/ListadoDeProductosContainer';

function App() {
  let producto1 = { id: 100, name: 'zapato nike', price: 100 };

  return (
    <div>
      <NavBar />
      {/* <ListadoDeProductosContainer/> */}
      <Producto />
    </div>
  );
  }

export default App;

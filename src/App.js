import "./App.css";
import NavBar from "./components/NavBar";
import Producto from './components/Producto';

function App() {
  let producto1 = { id: 100, name: 'zapato nike', price: 100 };

  return (
    <div>
      <NavBar />

      <Producto item={producto1} color={'blue'} />
    </div>
  );
  }

export default App;

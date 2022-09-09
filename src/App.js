import "./App.css";
import NavBar from "./components/NavBar";
import Producto from './components/Producto';
import ListadoDeProductosContainer from './components/ListadoDeProductosContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetalledeProductoContainer from './components/DetalleDeProducto'

function App() {


  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ListadoDeProductosContainer/>}/>
      <Route path="/category/:idcategory" element={<ListadoDeProductosContainer/>}/>
      <Route path="/product/:id" element={<DetalledeProductoContainer/>}/>
      </Routes>
      </BrowserRouter>
  );
  }

export default App;

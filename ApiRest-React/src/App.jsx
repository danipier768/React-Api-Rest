
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import NuevoComponent from './Components/Pages/Nuevo/NuevoComponent';
import ListaComponent from './Components/Pages/LIsta/ListaComponent';
import HeaderComponent from './Components/Header/HeaderComponent';
import DetalleComponent from './Components/Pages/Detalle/DetalleComponent';
import EditarComponent from './Components/Pages/Editar/EditarComponent';
function App({ item }) {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
        <Routes>
          <Route path='/' element={<ListaComponent/>}/>
          <Route path='/NuevoComponent' element={<NuevoComponent/>}/>
          <Route path='/DetalleComponent/:id' element={<DetalleComponent/>}/>
          <Route path='/EditarComponent/:id' element={<EditarComponent/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

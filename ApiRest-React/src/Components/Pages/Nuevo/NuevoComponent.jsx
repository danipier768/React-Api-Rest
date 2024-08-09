import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NuevoComponent = () => {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const nuevoProducto = {
      nombre: nombre,
      precio: parseFloat(precio),
    };
    fetch('http://localhost:8080/producto/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(nuevoProducto),
    })
    .then((res) => {
      if(!res.ok) {
        throw new Error ('Error en la solicitud');
      }
      return res.json();
    })
    .then((data) => {
      console.log('Producto creado:', data);
      navigate('/'); 
    })
    .catch((error) => {
      console.error('Error al crear el producto:', error);
    });
  }
  const handleVolver = () =>{
    navigate('/');
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 mx-auto">
            <form  noValidate onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required 
                    autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="precio" 
                    name="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required 
                    autoComplete="off"/>
                </div>
                <button type="submit" className="btn btn-outline-success btn-block" >
                    <i className="fa-solid fa-plus"></i> Crear</button>
                    <div className="card-footer">
                        <button 
                        onClick={handleVolver}
                        type="button" 
                        className="btn btn-outline-primary btn-block">
                        
                          <i className="fas fa-arrow-alt-circle-left"></i> Volver</button>
                    </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default NuevoComponent

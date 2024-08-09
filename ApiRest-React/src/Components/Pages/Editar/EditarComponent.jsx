import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarComponent = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const { id } = useParams(); // Obtener el ID del producto de la URL
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener los datos del producto de la API al montar el componente
        fetch(`http://localhost:8080/producto/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setNombre(data.nombre);
                setPrecio(data.precio);
            })
            .catch((error) => {
                console.error('Error al obtener el producto:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const productoActualizado = {
            nombre: nombre,
            precio: parseFloat(precio),
        };
        fetch(`http://localhost:8080/producto/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productoActualizado),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then((data) => {
            console.log('Producto actualizado:', data);
            navigate('/'); 
          })
          .catch((error) => {
            console.error('Error al actualizar el producto:', error);
          });
    };

    const handleVolver = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 mx-auto">
                    <form onSubmit={handleSubmit}>
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
                                autoComplete="off"
                            />
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
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-success btn-block">
                            <i className="fa-solid fa-pen-to-square"></i> Actualizar
                        </button>
                        <div className="card-footer">
                            <button
                                className="btn btn-outline-primary btn-block"
                                onClick={handleVolver}
                            >
                                <i className="fas fa-arrow-alt-circle-left"></i> Volver
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditarComponent;

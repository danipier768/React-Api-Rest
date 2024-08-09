import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetalleComponent = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/producto/${id}`)
            .then(response => response.json())
            .then(data => setProducto(data))
            .catch(error => console.error('Error al obtener el producto:', error));
    }, [id]);

    const handleVolver = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 mx-auto">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-header text-center">
                            Detalle
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>ID: </b>{producto.id}</li>
                            <li className="list-group-item"><b>Nombre: </b>{producto.nombre}</li>
                            <li className="list-group-item"><b>Precio: </b>{producto.precio}€</li>
                        </ul>
                        <div className="card-footer">
                            <button
                                className="btn btn-outline-primary btn-block"
                                onClick={handleVolver}>
                                <i className="fas fa-arrow-alt-circle-left"></i> Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleComponent;

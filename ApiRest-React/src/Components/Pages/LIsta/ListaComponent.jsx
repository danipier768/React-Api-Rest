import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaComponent = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/producto/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          throw new Error('Data received is not an array');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      fetch(`http://localhost:8080/producto/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setData(data.filter(item => item.id !== id));
        })
        .catch(error => {
          console.error('Error al eliminar el producto:', error);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Ver</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio} €</td>
              <td>
                <Link className="btn btn-outline-primary" to={`/DetalleComponent/${item.id}`}>
                  <i className="far fa-eye"></i> Ver
                </Link>
              </td>
              <td>
                <Link className="btn btn-outline-warning" to={`EditarComponent/${item.id}`}>
                  <i className="far fa-edit"></i> Editar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  title="Eliminar producto"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="far fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default ListaComponent;

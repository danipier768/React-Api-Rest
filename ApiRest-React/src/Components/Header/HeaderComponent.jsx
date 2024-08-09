import React from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
              <a className="navbar-brand mx-5" href="#">Tutorial Nest</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link d-flex justify-content-end" to="/"><i className="far fa-list-alt"></i> Lista</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex justify-content-end"  to="/NuevoComponent"><i className="fas fa-plus-circle"></i> Nuevo Producto</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    
  )
}

export default HeaderComponent

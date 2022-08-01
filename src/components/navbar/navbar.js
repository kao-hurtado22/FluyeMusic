import { Button } from 'bootstrap';
import React from 'react';
import Logo from '../../media/fluyemusic-blanconegro2.png';
import './navbar.css';

/* IMPORT REACT-ICON */
import { FaSearch } from 'react-icons/fa';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='logo-nav' src={Logo} alt="" width="120" height="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="http://127.0.0.1:5500/src/api/api.html">
                <FaSearch/>Busca tu musica
              </a>
            </li>
          </ul>
        </div>
        <div className='nav-button'>
          <a href='http://127.0.0.1:5500/src/components/registrarse/registrarse.html'>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span> Registrarte
            </button>
          </a>
          <a href='http://127.0.0.1:5500/src/components/login/login.html'>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span> Iniciar Sesión
            </button>
          </a>
        </div>
      </div>
    </nav>

  );
};


export default Navbar;
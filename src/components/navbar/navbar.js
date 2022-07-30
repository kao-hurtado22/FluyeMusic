import { Button } from 'bootstrap';
import React from 'react';
import Logo from '../../media/fluyemusic-blanconegro.png';
import './navbar.css';



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
                            <a className="nav-link active text-white" aria-current="page" href="#">
                                FluyeMusic
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                | Artistas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="http://127.0.0.1:5500/src/components/registrarse/registrarse.html">
                                | Registrarte
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">

                            </a>
                        </li>
                    </ul>
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
import React from 'react';
import './footer.css';

/* IMPORT REACT-ICON */
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-info fw-bold text-secondary mx-5">
                <span className="footer-title pb-5">FluyeMusic Corporate</span>
                <div className="list text-white d-flex flex-column mt-5">
                    <p>Acerca de</p>
                    <p>Empleo</p>
                    <p>For the Record</p>

                </div>

            </div>
            <div className="footer-info fw-bold text-secondary mx-5">
                <span className="footer-title pb-5">Comunidad</span>
                <div className="list text-white d-flex flex-column mt-5">
                    <p>Zona de Artistas</p>
                    <p>Desarrolladores</p>
                    <p>Inversores</p>
                    <p>Proveedores</p>

                </div>

            </div>
            <div className="footer-info fw-bold text-secondary mx-5">
                <span className="footer-title pb-5">Enlaces Utiles</span>
                <div className="list text-white d-flex flex-column mt-5">
                    <p>Asistencia</p>
                    <p>App móvil gratis</p>

                </div>

            </div>
            <div className="footer-info fw-bold text-secondary mx-5">
                <span className="footer-title pb-5">Redes Sociales</span>
                <div className="list text-white d-flex flex-column mt-5">
                    <h1><FaFacebookSquare /> <AiFillInstagram /> <FaTwitterSquare /></h1>
                </div>

            </div>



        </footer>
    )
}

export default Footer;
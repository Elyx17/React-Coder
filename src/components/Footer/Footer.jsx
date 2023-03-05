import React from 'react';


const Footer = () => {
    return (
        <div className="footer-basic">
        <footer>
            <ul className="list-inline">
                <li class="list-inline-item"><a href="#">Inicio</a></li>
                <li class="list-inline-item"><a href="#">Productos</a></li>
                <li class="list-inline-item"><a href="#">Dirección</a></li>
                <li class="list-inline-item"><a href="#">Contacto</a></li>
            </ul>
            <div className="social">
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-whatsapp"></i></a>
                <a href="#"><i className="bi bi-info-lg"></i></a>
            </div>
            <p className="copyright">Copyright &copy; Todos los derechos reservados Elyx Hall 2023</p>
        </footer>
    </div>
    );
}

export default Footer;

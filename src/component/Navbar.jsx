import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">Collection <i>Savons</i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Produits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <a href="#" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i> Se Connecter</a>
                        <a href="#" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i> Register</a>
                        <a href="#" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i> Cart (0)</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



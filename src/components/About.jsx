// src/components/About.jsx
import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1 className="display-4">À propos de nous</h1>
                    <p className="lead">Découvrez notre boutique de savon située dans le magnifique château de style Versailles. Notre savoir-faire artisanal et notre passion pour les produits de qualité vous offrent une expérience unique.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="./assets/boutique-ext.webp" className="img-fluid rounded mb-4" alt="Boutique extérieure" />
                </div>
                <div className="col-md-4">
                    <img src="./assets/boutique-int.webp" className="img-fluid rounded mb-4" alt="Intérieur de la boutique" />
                </div>
                <div className="col-md-4">
                    <img src="./assets/boutique-colors.webp" className="img-fluid rounded mb-4" alt="Produits de savon" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="./assets/atelier-savon.webp" className="img-fluid rounded mb-4" alt="Atelier de fabrication" />
                </div>
                <div className="col-md-4">
                    <img src="./assets/boutique-reine.webp" className="img-fluid rounded mb-4" alt="Savons en exposition" />
                </div>
                <div className="col-md-4">
                    <img src="./assets/boutique-logo.png" className="img-fluid rounded mb-4" alt="Château de style Versailles" />
                </div>
            </div>
        </div>
    );
}

export default About;

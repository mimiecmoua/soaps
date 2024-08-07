import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={`${process.env.PUBLIC_URL}/assets/logo1.png`} alt="Logo" className="img-fluid" />
        </div>
        <div className="col-md-6 my-5 py-5">
          <h2 className="fw-bold">Contactez-nous</h2>
          <p className="mt-4">
            <strong>Adresse:</strong> 1234 Rue Royale, Forêt de La Fontaine, 78000 Versailles, France
          </p>
          <p>
            <strong>Téléphone:</strong> +33 1 23 45 67 89
          </p>
          <p>
            <strong>Email:</strong> contact@collectionsavons.com
          </p>
          <p>
            <strong>Heures d'ouverture:</strong> Lundi - Vendredi: 9h00 - 18h00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { total } = location.state;

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="mb-4">Procéder au paiement</h2>
          <h4 className="mb-4">Total de la commande : {total}€</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Numéro de carte</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Nom sur la carte</label>
              <input type="text" className="form-control" id="cardName" placeholder="John Doe" />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="expiryDate" className="form-label">Date d'expiration</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cvv" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-dark w-100">Payer</button>
          </form>
          <hr className="my-4" />
          <div className="text-center">
            <button type="button" className="btn btn-outline-dark w-100">Payer avec PayPal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


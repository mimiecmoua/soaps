import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
  <div className="container">
    <a class="navbar-brand fw-bold fs-4" href="#">Savons Côté Jardin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Produits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">A propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className="buttons">
          <a href="" class="btn btn-outline-dark"><i class="fa fa-sign-in me-1"></i> Se Connecter</a>
          <a href="" class="btn btn-outline-dark ms-2"><i class="fa fa-user-plus me-1"></i> Register</a>
          <a href="" class="btn btn-outline-dark ms-2"><i class="fa fa-shopping-cart me-1"></i> Cart (0)</a>
      </div>  
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;

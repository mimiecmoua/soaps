import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json'; // Chemin vers votre fichier JSON

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            // Simulez un fetch en utilisant les données locales
            setData(productsData);
            setFilter(productsData);
            setLoading(false);
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                <div>
                    <div className="container my-4 py-2">
                        <div className="row">
                            <div className="col-12 mb-0 text-center">
                                <h1 className="display-6 fw-bolder"> Nouvelle Collection</h1>
                                <hr/>
                                <img className="img-fluid" src="assets/logo1.png" alt="logo" />
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-0 py-0">
                        <div className="col-12 col-md-2 mb-2">
                            <button className="btn btn-outline-dark w-100">Voir Tout</button>
                        </div>
                        <div className="col-12 col-md-2 mb-2">
                            <button className="btn btn-outline-dark w-100">Le Roi</button>
                        </div>
                        <div className="col-12 col-md-2 mb-2">
                            <button className="btn btn-outline-dark w-100">La Reine</button>
                        </div>
                        <div className="col-12 col-md-2 mb-2">
                            <button className="btn btn-outline-dark w-100">La Cour</button>
                        </div>
                        <div className="col-12 col-md-2 mb-2">
                            <button className="btn btn-outline-dark w-100">Trésors</button>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    {filter.map((product) => (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img className="card-img-top" src={product.image} alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title}...</h5>
                                    <p className="card-text">{product.price}</p>
                                    <a href="#" className="btn btn-outline-dark">Acheter</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;

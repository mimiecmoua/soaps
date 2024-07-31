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
                <div className="buttons d-flex justify-content-center mb-5 pb-5 py-5">
                    <button className="btn btn-outline-dark rounded me-2">Voir Tout</button>
                    <button className="btn btn-outline-dark rounded me-2">Le Roi</button>
                    <button className="btn btn-outline-dark rounded me-2">La Reine</button>
                    <button className="btn btn-outline-dark rounded me-2">La Favorite</button>
                    <button className="btn btn-outline-dark rounded me-2">Trésors du Capitaine</button>
                </div>
                <div className="row">
                    {filter.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card">
                                <img className="card-img-top" src={product.image} alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
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

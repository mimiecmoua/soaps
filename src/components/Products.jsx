import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import productsData from '../data/products.json'; // Chemin vers votre fichier JSON

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            // Simuler un fetch en utilisant les données locales
            setTimeout(() => {
                setData(productsData);
                setFilter(productsData);
                setLoading(false);
            }, 2000);
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div className="row">
                {Array(8).fill().map((_, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Skeleton height={200} />
                        <Skeleton count={3} />
                    </div>
                ))}
            </div>
        );
    };

    const filterProducts = (category) => {
        if (category === "Voir Tout") {
            setFilter(data);
        } else {
            const filteredData = data.filter((product) => {
                if (category === "Le Roi" && product.id <= 4) return true;
                if (category === "La Reine" && product.id >= 5 && product.id <= 10) return true;
                if (category === "La Cour" && product.id >= 11 && product.id <= 14) return true;
                if (category === "Trésors" && product.id >= 15 && product.id <= 20) return true;
                return false;
            });
            setFilter(filteredData);
        }
    };

    const ShowProducts = () => {
        return (
            <div className="row">
                {filter.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img className="card-img-top" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Voir</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="row my-4 py-2">
                <div className="col-12 text-center mb-4">
                    <h1 className="display-6 fw-bolder">Nouvelle Collection</h1>
                    <img className="img-fluid mb-3" src={`${process.env.PUBLIC_URL}/assets/logo1.png`} alt="logo" />
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-2 mb-2">
                    <button className="btn btn-outline-dark w-100" onClick={() => filterProducts("Voir Tout")}>Voir Tout</button>
                </div>
                <div className="col-12 col-md-2 mb-2">
                    <button className="btn btn-outline-dark w-100" onClick={() => filterProducts("Le Roi")}>Le Roi</button>
                </div>
                <div className="col-12 col-md-2 mb-2">
                    <button className="btn btn-outline-dark w-100" onClick={() => filterProducts("La Reine")}>La Reine</button>
                </div>
                <div className="col-12 col-md-2 mb-2">
                    <button className="btn btn-outline-dark w-100" onClick={() => filterProducts("La Cour")}>La Cour</button>
                </div>
                <div className="col-12 col-md-2 mb-2">
                    <button className="btn btn-outline-dark w-100" onClick={() => filterProducts("Trésors")}>Trésors</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;



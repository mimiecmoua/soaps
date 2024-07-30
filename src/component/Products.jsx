import React, {useState, useEffect} from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect (() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, []);

    const Loading = () => {
        return(
            <>
                Loading....
            </>
        )
    }
    const ShowProducts = () => {
        return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="bnt btn-outline-dark rounded me-2">Voir Tout</button>
            <button className="bnt btn-outline-dark rounded me-2">Le Roi</button>
            <button className="bnt btn-outline-dark rounded me-2">La Reine</button>
            <button className="bnt btn-outline-dark rounded me-2">La Favorite</button>
            <button className="bnt btn-outline-dark rounded me-2">Trésors du Capitaine</button>
        </div>
        {filter.map((product)=>{
            return(
                <>
                <div className="col-md-3">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                </>
            )
        })}
        </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Collection de Savons</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    );
}

export default Products;
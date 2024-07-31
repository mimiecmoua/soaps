import React from 'react';
import Products from "./Products";

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-black border-0">
                <img src="/assets/bg1.webp" className="card-img" alt="Background"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='overlay'></div>
                    <div className='container text-overlay'>
                        <h5 className="card-title display-3 mb-0">Nouvelle Sensations</h5>
                        <p className="card-text lead fs-2">
                            Collection Savons vous propose des savons inspirés par l'histoire de France et l'extravagance de cette époque sous le reigne de Louis XIV. 
                        </p>
                    </div>
                </div>
            </div> 
            <Products/>
        </div>
    );
    
}

export default Home;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delCart, increaseQty, decreaseQty } from '../redux/action';
import { getCartItems } from '../redux/selectors';

const Cart = () => {
    const state = useSelector(getCartItems);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item));
    }

    const handleIncrease = (item) => {
        dispatch(increaseQty(item));
    }

    const handleDecrease = (item) => {
        dispatch(decreaseQty(item));
    }

    const cartItems = (cartItem) => {
        // Assurez-vous que le prix est bien un nombre
        const price = parseFloat(cartItem.price.replace('€', ''));
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="250px" width="170px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">{cartItem.price}</p>
                            <div className="d-flex align-items-center py-4">
                                <button className="btn btn-outline-dark me-2" onClick={() => handleDecrease(cartItem)}>-</button>
                                <span>{cartItem.qty}</span>
                                <button className="btn btn-outline-dark ms-2" onClick={() => handleIncrease(cartItem)}>+</button>
                            </div>
                            <p className="lead fw-bold">
                                {cartItem.qty} x {cartItem.price} = {(cartItem.qty * price).toFixed(2)}€
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Procéder au paiement</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
}

export default Cart;



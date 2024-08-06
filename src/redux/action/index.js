// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

// For Increase Item Quantity in Cart
export const increaseQty = (product) => {
    return {
        type: "INCREASEQTY",
        payload: product
    }
}

// For Decrease Item Quantity in Cart
export const decreaseQty = (product) => {
    return {
        type: "DECREASEQTY",
        payload: product
    }
}

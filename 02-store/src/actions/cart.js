import products from "../data/products";



const addToCart = (product) => {
    return {
        type:"ADD_TO_CART_PRODUCT",
        product
    }
}

const plusCart = (product) => {
    return {
        type:"PLUSS_TO_CART_PRODUCT",
        product
    }
}

const minusCart = (product) => {
    return {
        type:"MINUS_TO_CART_PRODUCT",
        product
    }
}
const deleteCart = (product) => {
    return {
        type:"DELETE_TO_CART_PRODUCT",
        product
    }
}



export {addToCart,plusCart,minusCart,deleteCart}
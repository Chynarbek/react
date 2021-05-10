import products from "../data/products";



const addToCart = (product) => {
    return {
        type:"ADD_TO_CART_PRODUCT",
        product
    }
}
export {addToCart}
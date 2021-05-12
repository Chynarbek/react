import React from 'react';
import { connect } from 'react-redux';
import { plusCart,minusCart,deleteCart } from "../actions/cart"


const cartBadge = ({ cart, plusCart, minusCart, deleteCart }) => {
    return (
        <div>
            <h1>Cart</h1>
            <table className="cart-table table table-bordered mb-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {cart.itemCart.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img className="w-25" src={item.product.Image}></img>
                            </td>
                            <td>
                                {item.product.title}
                            </td>
                            <td>
                                {item.product.price}
                            </td>
                            <td>
                                {item.count}
                                <button onClick={() => plusCart(item.product)} className="btn btn-primary ml-2">
                                    +
                            </button>
                                <button onClick={() => minusCart(item.product)} className="btn btn-primary ml-2">
                                    -
                            </button>
                            <button onClick={() => deleteCart(item.product)} className="btn btn-primary ml-2">
                                    Delete
                            </button>
                            </td>
                            <td>
                                {item.lineTotalPrice}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const msp = ({ cart }) => {
    return { cart }
}

export default connect(msp, { plusCart,minusCart,deleteCart })(cartBadge);
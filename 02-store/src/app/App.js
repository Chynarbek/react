import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductList from "../components/ProductList";
import { Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import CartBadge from '../components/cartBadge';

const App = () => {
    console.log()
    return (
        <div>
            <Navbar />
            <div className="container border shadow-sm mt-4">
                <Route path="/" exact>
                    <ProductList />
                </Route>
                <Route path="/product/:id" exact>
                    <ProductDetail />
                </Route>
                <Route path="/cart" exact>
                    <CartBadge />
                </Route>
            </div>
        </div >
    );
};



export default App;
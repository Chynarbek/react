import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductList from "../components/ProductList";
import { Route } from "react-router-dom"

const App = () => {
    console.log()
    return (
        <div>
            <div className="container border shadow-sm mt-4">
                <Route path="/" exact>
                    <ProductList />
                </Route>
                <Route path="/product/:id" exact>
                    <ProductDetail />
                </Route>
            </div>
        </div >
    );
};



export default App;
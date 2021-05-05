import React from 'react';
import { connect } from "react-redux";

const App = ({ state }) => {
    console.log(state)
    return (
        <div>
            <div className="container border shadow-sm mt-4">
                <h1>Sulpak</h1>
                <div className="row mb-4">
                {state.map((item) =>
                (<div key={item.id} className="col-3 mt-4">
                    <div className="card card-product">
                        <img className="card-img-top card-product-img" src={item.Image} alt=""></img>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                            </h2>
                            <p className="card-text">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>)
                )}
                </div>
            </div>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(App);
import React from 'react';
import { connect } from "react-redux";

const App = ({state}) => {
    console.log(state)
    return (
        <div>
            <div className="container border shadow-sm mt-4">
                <h1>Sulpak</h1>
                <div className="row mb-4">
                {state.map((item) =>
                (<div key={item.id} className="col-4 m-0 p-0">
                   

                        <img className="card-product" src={item.image} alt=""></img>
                       
            
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
import React from 'react';
import { connect } from "react-redux"
import { addCount, minusCount, addAda, minusMada } from "./actions"


const App = ({ count,  addCount, minusCount, addAda, minusMada  }) => {
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={addCount}>+</button>
            <button className="btn btn-primary" onClick={minusCount}>-</button>
            <button className="btn btn-primary" onClick={addAda}>*2</button>
            <button className="btn btn-primary" onClick={minusMada }>/2</button>

        </div>
    );
};

const msp = ({ count }) => {
    return { count }
}




export default connect(
    msp, { addCount, minusCount, addAda, minusMada }
)(App);
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/css/Modern.css'

const Contacts = () => {
    return (
        <div className="container jumbotron div-modern3 shadow-sm mt-5">
            <p className="contacts-text h6">PHONE: <span className="text-2">+996550052522</span></p>
            <p className="contacts-text h6">EMAIL: <span className="text-1">ratmir.yuldashev28@mali.ru</span></p>
            <p className="contacts-text h6">DISCORD: <span className="text-3">Shone</span></p>
            <p className="contacts-text h5"><span className="text-2">We can connect to us,</span><span className="text-3">if you are wiat)</span></p>
        </div>
    );
};

export default Contacts;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/css/Modern.css'

const About = () => {
    return (
        <div className="container jumbotron div-modern shadow-sm mt-5">
            <div>
                <h1 className="text-center title-about">Abuot us</h1>
            </div>
            <div>
                <p className="text h6"><span className="text-2">Lorem ipsum</span>, dolor sit amet consectetur adipisicing elit. Commodi praesentium earum ipsa facilis laboriosam. <span className="text-1">Possimus deserunt</span> veritatis rem modi officiis nostrum, aperiam quaerat eligendi <span className="text-3">iure neque</span> laboriosam accusantium nemo rerum?</p>
            </div>
        </div>
    );
};

export default About;
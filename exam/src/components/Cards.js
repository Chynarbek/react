import React from 'react';
import { Link } from 'react-router-dom';
import './css/Card.css'

const Cards = ({ news }) => {
    return (
        <>
            {news.map((cards, index) => (
                <div key={index} className="col-md-3 col-sm-6 opca mt-2">
                    <div className="card bg-dark text-center news-item">
                        <img className="card-img-top img-card-min" alt="" src={cards.image} />
                        <div className="card-body">
                            <h3 className="card-title">{cards.short_title}</h3>
                            <p className="card-text">{cards.shor_content}</p>
                        </div>
                        <Link className="m-4 btn btn-game" to={`/items/${cards.id}`}>
                            In Detail
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;
import React from 'react';
import '../components/css/Detail.css'
import { useParams } from 'react-router-dom';

const Detail = ({ news }) => {

    const { id } = useParams();

    return (
        <div className="container">
            {news.filter((news) => news.id === id).map((item, index) => (
                <div key={index} className="container bg mt-2 mb-2">
                    <h1 className="text-center title-style">{item.title}</h1>
                    <img src={item.image} className="p-4 mt-2 mb-2" alt="" />
                    <p className="mb-4 mr-4 ml-4 size-p">{item.content}</p>
                </div>
            ))}
        </div>

    );
};

export default Detail;
import { stringify } from 'querystring';
import React from 'react';
import Stars from '../Sidebar/Stars';
import './Restaurant.css';

interface RestaurantProps {
    id: number;
}

const Restaurant: React.FC<RestaurantProps> = (props) => {
    let resto = {
        id: 3,
        name: "Mamamia",
        rating: 3
    }
    return (
        <div className='restaurant-details'>
            <div className = 'restaurant-title'><span>{resto.name} -- </span><Stars rating={resto.rating}/></div>
        </div>
    );
}

export default Restaurant;
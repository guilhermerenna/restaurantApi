import React from 'react';
import Stars from './Stars';

interface RestaurantEntryProps {
    id: number;
    name: string;
    rating: number;
}

const RestaurantEntry: React.FC<RestaurantEntryProps> = (props) => {
    return (
        <tr className="restaurant">
            <td>{props.id}: {props.name}</td><td><Stars rating={props.rating} /></td>
        </tr>
    );
}

export default RestaurantEntry;
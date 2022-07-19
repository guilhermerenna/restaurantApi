import React from "react";
import './Restaurant.css'

interface HeaderProps {
    title: string;
    rate: number;
}

const Restaurant: React.FC<HeaderProps> = (props) => {
    return (
        <div className="menu-resto">
            <div className="menu-resto-name">{props.title}</div>

            <div className="menu-resto-rate">
                <span className="star star-under fa fa-star"></span>
                <span className="star star-over fa fa-star"></span>
            </div>
        </div>
    );
}

export default Restaurant;

/*
const Header: React.FC<HeaderProps> = (props) => {
    let pageTitle = "RESTaurantAPI"
    if(props.title != undefined) pageTitle = props.title;
    return (
        <header>
            <h1 className="pageHeader content">{pageTitle}</h1>
        </header>
    );
}

export default Header;
*/
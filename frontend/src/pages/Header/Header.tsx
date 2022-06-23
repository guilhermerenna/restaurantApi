import React from "react";
import './Header.css'

interface HeaderProps {
    title?: string;
}

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
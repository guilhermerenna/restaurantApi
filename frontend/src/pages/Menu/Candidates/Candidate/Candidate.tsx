import React from "react";
import './Candidate.css'

interface HeaderProps {
    name: string;
    efficiency: number;
    wallet: number;
}

const Candidate: React.FC<HeaderProps> = (props) => {
    return (
            <tr>
                <td className="menu-candidate-name">{props.name}</td>
                <td className="menu-candidate-efficiency">{props.efficiency}</td>
                <td className="menu-candidate-wallet">{props.wallet}</td>
            </tr>
    );
}

export default Candidate;

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
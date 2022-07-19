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
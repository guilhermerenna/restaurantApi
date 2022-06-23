import React from "react";
import './Candidates.css'

import Candidate from './Candidate/Candidate'

const Candidates = () => {
    return (
        <div className="menu-candidates">
            <table>
            <tr><td colSpan={3}>Candidates</td></tr>
            <tr><td className="menu-table-header">Name</td><td className="menu-table-header">Efficiency&nbsp;&nbsp;</td><td className="menu-table-header">Wallet</td></tr>
            <Candidate name="Guilherme" efficiency={5} wallet={5000} />
            <Candidate name="Lorena" efficiency={7} wallet={50} />
            </table>
        </div>
    )
}

export default Candidates;
import React from 'react';

interface CandidateProps {
    id: number;
    name: string;
    efficiency: number;
    basePay: number;
}

const Candidate: React.FC<CandidateProps> = (props) => {
    return (
        <tr className='candidate'>
            <td className='candidate-id'>{props.id}: &nbsp;</td>
            <td className='candidate-name'>{props.name}&nbsp;</td>
            <td className='candidate-efficiency'>{props.efficiency}%&nbsp;&nbsp;&nbsp;</td>
            <td className='candidate-wallet'>${props.basePay}</td>
        </tr>
    );
}

export default Candidate;
import Candidate from './Candidate';
import { GrAddCircle } from 'react-icons/gr';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

interface CandidateStructure {
    id: number;
    name: string;
    efficiency: number;
    basePay: number;
    tips: number;
}

const Candidates = () => {
    // 2 importatn React Hooks:
    // React State: keeps track of the state of the component and tracks changes. Makes it possible to re-render when state changes
    const [candidates, setCandidates] = useState<CandidateStructure[]>([]);
    
    // React Effect: performing side effects -- allows you to change the state of something
    // the parameters inside the array at the bottom (which are missing in this example) allow the method to be called many times
    // in our case, since it's empty, it will be called only once
    useEffect(() => {
        getEmployees().then(response => {
            setCandidates(response.data);
            console.log("Employee list: ")
            console.log(response.data);
        })
    },
    []
    );

    return (
        <div>
            <h2>Candidates</h2>
            <div className="candidates">
                <table>
                    {candidates.map(candidate => (
                        <Candidate id={candidate.id} name={candidate.name} efficiency={candidate.efficiency} basePay={candidate.basePay} />                        
                    ))}
                </table>
                <input type='text' placeholder='Name' className='inputName' id='candidateName'/>
                <input type='number' placeholder='100%' min={0} className='inputNumber' id='candidateEfficiency' />
                <input type='number' placeholder='$$' min={0} className='inputNumber' id='candidateBasePay' />
                
                <GrAddCircle onClick={() => {
                    const nameInput = document.getElementById('candidateName') as HTMLInputElement;
                    const nameValue = nameInput?.value || "New Candidate";

                    const efficiencyInput = document.getElementById('candidateEfficiency') as HTMLInputElement;
                    const efficiencyValue = efficiencyInput?.value || "100";

                    const basePayInput = document.getElementById('candidateBasePay') as HTMLInputElement;
                    const basePayValue = efficiencyInput?.value || "100";

                    newCandidate(nameValue, efficiencyValue, basePayValue);
                    Candidates();
                    }
                    } />

            </div>
        </div>
    )
}

async function getEmployees () {
    return api.get('employee');
}

function newCandidate(nameValue: string, efficiencyValue: string, basePayValue: string) {
    api.post('employee', {
        name: nameValue,
        efficiency: efficiencyValue,
        basePay: basePayValue,
        tips: 0
    }).then(function (error) {
        console.log(error);
    })
}

export default Candidates;

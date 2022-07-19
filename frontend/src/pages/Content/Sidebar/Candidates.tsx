import Candidate from './Candidate';
import { GrAddCircle } from 'react-icons/gr';


const Candidates = () => {
    return (
        <div>
            <h2>Candidates</h2>
            <div className="candidates">
                <table>
                    <Candidate id={1} name="Gui" efficiency={90} wallet={950} />
                    <Candidate id={2} name="Lola" efficiency={120} wallet={1500} />
                    <Candidate id={3} name="Kevin" efficiency={80} wallet={800} />
                    <Candidate id={3} name="Joe" efficiency={75} wallet={800} />
                    <Candidate id={3} name="Mike" efficiency={55} wallet={600} />
                </table>
                <input type='text' placeholder='Name' className='inputName' />
                <input type='number' placeholder='100%' min={0} className='inputNumber' />
                <input type='number' placeholder='$$' min={0} className='inputNumber' /><GrAddCircle />
            </div>
        </div>
    )
}

export default Candidates;
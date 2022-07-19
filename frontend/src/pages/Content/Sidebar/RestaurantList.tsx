import RestaurantEntry from './RestaurantEntry';
import { GrAddCircle } from 'react-icons/gr';

const RestaurantList = () => {
    return (
        <div>
            <h2>Restaurants</h2>
            <div  className="restaurants">
            <table>
                <RestaurantEntry id={1} name='Mamamia' rating={3} />
                <RestaurantEntry id={2} name='McD' rating={2} />
                <RestaurantEntry id={3} name='FiveGuys' rating={5} />
                <RestaurantEntry id={4} name='FourStars' rating={4} />
                <RestaurantEntry id={5} name='OneStar' rating={1} />
            </table>
            <input type='text' placeholder='Name' className='inputRestoName' />
            <input type='number' placeholder='★★' min={0} max={5} className='inputNumber' /><GrAddCircle />
            </div>
        </div>
    )
}

export default RestaurantList;
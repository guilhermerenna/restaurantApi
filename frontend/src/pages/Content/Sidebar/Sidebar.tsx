import Candidates from './Candidates';
import RestaurantList from './RestaurantList';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <RestaurantList />
            <Candidates />
        </div>
    )
}

export default Sidebar;
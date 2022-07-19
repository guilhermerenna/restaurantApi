import Restaurants from "./Restaurants/Restaurants";
import Candidates from "./Candidates/Candidates";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu-parent">
            <Restaurants />
            <Candidates />
        </div>
    );
}

export default Menu;
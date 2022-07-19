import './Restaurants.css'
import Restaurant from "./Restaurant/Restaurant"

const Restaurants = () => {
    return (
        <div className="menu-restos">
            <h1 className="menu">Restaurants</h1>
            <Restaurant title="Mamamia" rate={2} />
            <Restaurant title="La Petite" rate={4} />
            <Restaurant title="Expresso" rate={5} />
            <input type="text">Enter resto name</input>
            <input type="submit" />
        </div>
    );
}

export default Restaurants;
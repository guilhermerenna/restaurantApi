import React, { useState } from 'react';

import Header from '../Header/Header'
import Content from '../Content/Content'

import './Home.css'

const Home = () => {
    return (
        <div id="page-home">
            <div>
                <Header />
                <Content />
            </div>
        </div>
    )
}


    /*
    const [counter, setCounter ] = useState(0); // returns an array [ state value, function to refresh state value]

    function handleButtonClick() {
        setCounter(counter+1);
    }

    return (
          <div>
            <Header />

            <h1>App content</h1>
            <h2>{counter}</h2>
            <button type="button" onClick={handleButtonClick}>Increment</button>

          </div>
    );
}
//*/

export default Home;
import React from 'react';

interface StarsProps {
    rating: number;
}

const Stars: React.FC<StarsProps> = (props) => {
    let yellowStarsInt = props.rating || 0;

    let yellowStars = '';
    let grayStars = '';
    for(let i = 0; i< yellowStarsInt; i ++) {
        yellowStars = yellowStars.concat('★');
        // console.log('Printing yellow, iteration '+(i+1));
    }
    for(let i = 0; i< 5-yellowStarsInt; i ++) {
        grayStars = grayStars.concat('★');
        // console.log('Printing gray, iteration '+(i+1+yellowStarsInt));
    }

    return (
        <div className='stars'>
            <div className='yellow-stars'>{yellowStars}</div>
            <div className='gray-stars'>{grayStars}</div>
        </div>
    );
}

export default Stars;
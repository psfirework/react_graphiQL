import React from 'react';

export const ImageTable = ({ships}) => {
    console.log(ships);

    return (
        <div>
            {ships.map(ship => ship ? <img src={ship.image} alt=""/> : null)}
        </div>
    )
};
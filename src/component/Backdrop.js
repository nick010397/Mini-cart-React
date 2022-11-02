import React from 'react';

function Backdrop({ onClickHandler }) {
    return (
        <div
            id="backdrop"
            onClick={onClickHandler}
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            // hidden={!isCartOpen}
        ></div>
    );
}

export default Backdrop;

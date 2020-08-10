import React from 'react';
import './styles.css';
import ai from '../images/ai.svg'
function Start(props) {
    return (
        <div className="container text-center mt-5 pt-3">

            <img src={ai} alt="Ai" className="icon" />
            <p className="font-weight-bold">Try *Get me some news* </p>

            
        </div>
    );
}

export default Start;
import React from 'react';
import hero_image from '../../images/hero_image.svg'
import './styles.css'


function hero(props) {
    return (
        <div className="hero">
           <div className="container ">
           <img src={hero_image} alt="hero" className="img-fluid img-responsivegi"/>
           {/* <h2 className="mt-5 pt-5 hero__text">Read news by giving command</h2>

         */}

       
            
            </div>
        </div>
    );
}

export default hero;
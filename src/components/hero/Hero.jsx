import React from 'react';
import hero_image from '../../images/hero_image.svg'
import './styles.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function hero(props) {
    const weather = props.weather

    console.log(weather)

   
    return (
        <div className="hero">
           <div className="container ">
           <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
        <img src={hero_image} alt="hero" className="img-fluid img-responsivegi"/>

        </Grid>
        <Grid item xs={6} lg={6}>
            {

Object.keys(weather).length  > 0  ? (
            <div className="mt-5 pt-5 text-center">
                 <h3 className="text-white">{weather.city}</h3>
                <p className="text-white h4">{weather.temp} ° C</p>
                <Button variant="contained" color="secondary">
          {weather.condition}
        </Button>

            </div>
            ) :
            (

                <div className="mt-5 pt-5 text-center">
                    <h4 className="text-white mt-5">*What's the weather today in [CITY] *</h4>
                </div>
            )

            }
      
    </Grid>
        </Grid>
          

           

           {/* <h2 className="mt-5 pt-5 hero__text">Read news by giving command</h2>

         */}

       
            
            </div>
        </div>
    );
}




export default hero;
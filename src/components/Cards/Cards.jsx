import React from 'react';
import NewsCard from './NewsCard'
import Grid from '@material-ui/core/Grid';


export default function Cards(props) {
  
   
    const newsCards = props.news.articles
  if(newsCards !== undefined){
  return (
      <div className="container">
          <h2 className="text-center mt-5 mb-5">Latest News</h2>

          <Grid container spacing={3}>
       
        
    {
        newsCards.map((newsCard , index) => {

           return ( 
            <Grid item xs={12} lg={4} className="mt-2" key={index}>
           <NewsCard   news={newsCard}  />
           </Grid>
           )
        })
    }

    
    </Grid>

    </div>
  );
}else{

    return (

            <div className="mt-5 p-5">
                <h2 className="text-center">Getting Some Good news</h2>
                </div>

    )
}

}
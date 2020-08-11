import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import './styles.css'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
   // maxheight : 280

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function NewsCard(props) {
  const classes = useStyles();
  
  console.log(props);
 
  const news = props.news;
  const current = props.current;
  const index = props.index

  return (
      <div className="container">
       



    <Card className={classes.root} >
     
      <CardMedia
        className={classes.media}
        image={news.urlToImage}
        title="Paella dish"
      />

<Grid container spacing={1} className=" pt-1 container">
<Grid item xs={6} lg={6} className="mt-2">
<Chip
        label={news.publishedAt}
        color="primary"
        variant="outlined"
      />
    
   
  </Grid>


  <Grid item xs={6} lg={6} className="mt-2 text-right">
     {index + 1}
  </Grid>
  </Grid>

      <CardContent>
      <Typography className="bold mb-3 font-weight-bold"  component="h5">
         {news.title}
        </Typography>
        <Typography variant="body2"  component="p">
          {(news.description)}
        </Typography>

        <div>

      <a href={news.url} target="_blank" rel="noopener noreferrer"> 
       <Button variant="outlined" color="primary" className="mt-4" size="small">
 Learn More  
</Button>
</a>



</div>

    
      </CardContent>
     
     {
       current === index ?  <div className="mark"></div> : ''
     }
     
   
   
    </Card>
    </div>
  );
}

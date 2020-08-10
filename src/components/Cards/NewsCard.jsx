import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import './styles.css'



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
  
 
  const news = props.news

  return (
      <div className="container">
       



    <Card className={classes.root} >
     
      <CardMedia
        className={classes.media}
        image={news.urlToImage}
        title="Paella dish"
      />


      <CardContent>
      <Typography className="bold mb-3 font-weight-bold"  component="h5">
         {news.title}
        </Typography>
        <Typography variant="body2"  component="p">
          {(news.description).substring(0 , 270)}
        </Typography>

        <div>

      <a href={news.url} target="_blank" rel="noopener noreferrer">  <Button variant="outlined" color="primary" className="mt-4" size="small">
 Learn More  
</Button>
</a>


</div>

    
      </CardContent>
     
      <div className="mark"></div>
    </Card>
    </div>
  );
}

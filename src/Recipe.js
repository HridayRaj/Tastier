import React from "react";
import { makeStyles, CardMedia , CardHeader, Typography } from "@material-ui/core";
import {Grid , Card , } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
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
  
}));


export default function Recipe(props) {



  const classes = useStyles();
  return (

    
        <Card classes={classes.root}>
       <CardHeader title= {props.title}  subheader={props.calories}/> 
       <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />

      <ol>
        {props.process.map(proces => (
          <li>
            <Typography variant ="subheading" >
            {proces}
            </Typography>
            
            </li>
        ))}
      </ol>

      </Card>
      
      
  );
}

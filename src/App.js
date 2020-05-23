import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./styles.css";
import Grid from "@material-ui/core/Grid"
import Container  from "@material-ui/core/Container"
import Typography  from "@material-ui/core/Typography"
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import { colors, AppBar, Toolbar } from "@material-ui/core";
  // for styels
const useStyles = makeStyles((theme)=>({

  paper:{
    margin:theme.spacing(3) 
  }

}))



  //


export default function App() {

  const APP_ID = "931b657e";
  const APP_KEY = "cbd5761b93f6c574d33badd6751bf85e";

  const [recipe, setRecipe] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("apple");

  // const [searchitem , searchbar]=useState("");
  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    setRecipe(data.hits);
    console.log(data.hits);
  };
  const onUpdate = e => {
    setText(e.target.value);
  };
  const handleQ = e => {
    console.log("Clicked");
    e.preventDefault();
    setQuery(text);
  };
  return (
   
     <Grid container direction="column" spacing={6}>
       <Grid item container >
         <AppBar color="primary" position="static">
           <Toolbar>
      <Typography align="right" component="h1" variant="h5" > 
       Get your favouite Recipe 
       </Typography>
       </Toolbar>
       </AppBar>
       </Grid>
       <Grid container >
         <Grid item xs={0} sm ={4} />
         <Grid item xs={12} sm={6} >
      <form onSubmit={handleQ}>
        <TextField
          type="text"
          className=""
          id="fname"
          name="fname"
          value={text}
          onChange={onUpdate}
          variant="outlined"
          fullWidth
          required
          label="Search favourite dish"
        />
        
      
      </form>
    </Grid>
    </Grid>
      
      
        <Grid container justify="center" spacing={2}>
          
      {recipe.map(recipe => (
        
          <Grid item >
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          process={recipe.recipe.ingredientLines}
        />
        </Grid>
      ))}
      </Grid>
      
      </Grid>
      
    
  );
}

import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./styles.css";

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
    <div>
      <h1> Get your favouite Recipe </h1>
      <form onSubmit={handleQ}>
        <input
          type="text"
          id="fname"
          name="fname"
          value={text}
          onChange={onUpdate}
        />
        <input type="submit" value="Search" />
      </form>
      {recipe.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          process={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

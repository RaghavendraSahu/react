import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
const Recipes = () => {

  const { data } = useContext(recipecontext)
  const renderrecipes = data.map(recipe => (
    <div key={recipe.id} className="recipe-item">
      <h2>title: {recipe.title}</h2>
      <p>instructions:  {recipe.instructions}</p>
    </div>
  ));
  
  return (
    <div className="w-full sm:w-1/2 mx-auto flex flex-col justify-center">{renderrecipes}</div>
  )
}

export default Recipes
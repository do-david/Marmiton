import React, {useState} from 'react';
import { uuid } from 'uuidv4'

const CreateRecipe = () => {
    const [recipes, setRecipes] = useState([])
    const [inputValue, setInputValue] = useState('')
    const submit = e => {
      e.preventDefault()
      const newRecipes = { id: uuid(), content: inputValue }
      setRecipes([...recipes, newRecipes])
      setInputValue('')
    }
  
    const deleteRecipe = id => {
      const newRecipe = recipes.filter(rec => rec.id !== id)
      setRecipes(newRecipe)
    }
  
    return (
      <>
        <h1>Create my recipes</h1>
        <form onSubmit={submit}>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type='text'
          ></input>
          <input type='submit'></input>
        </form>
        {recipes.map(rec => (
          <div key={rec.id}>
            <p>{rec.content}</p>
            <button onClick={() => deleteRecipe(rec.id)}>delete</button>
          </div>
        ))}
      </>
    )
};

export default CreateRecipe;
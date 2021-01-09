import axios from 'axios'

const getRecipes = (food,setLoader,setData,setError) => {
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
        params: {
          query: food,
          number: process.env.REACT_APP_LIMIT_ITEMS
          // diet: 'vegetarian',
          // excludeIngredients: 'coconut',
          // intolerances: 'egg, gluten',
          // number: '10',
          // offset: '0',
          // type: 'main course'
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': process.env.REACT_APP_HOST_API
        }
      }
      setLoader(true)
      axios.request(options).then(res => {
        setLoader(false)
        setData(res.data.results)
      }).catch(err => {
        setError(false)
        setError(err.message)
      })
}
export default getRecipes
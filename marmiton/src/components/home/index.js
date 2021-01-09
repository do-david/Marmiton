import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import getRecipes from '../../utils/getRecipes'

const BaseUri = 'https://spoonacular.com/recipeImages/'
const HomeComponent = () => {
    const [food,setFood] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState('')
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        getRecipes('burger',setIsLoaded,setRecipes,setError)
    },[])
    console.log(recipes)
    return(
        <RowContainer>
            <ColumnContainer>
            {recipes.map((recipe,index) => {
                return(
                    //<img href="`${BaseUri}${recipe.image}`"></img>
                    //<Image href="`${BaseUri}`${recipe.image}"></Image>
                    <span>{recipe.title}</span>
                )
            }
            )
            }
            </ColumnContainer>
        </RowContainer>
    )
}

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
`
const ColumnContainer = styled.div`
  flex: 24%;
  padding: 0 15px;
`
const Image = styled.img`
margin-top: 8px;
vertical-align: middle;
`
export default HomeComponent
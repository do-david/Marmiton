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
        getRecipes('kebab',setIsLoaded,setRecipes,setError)
    },[])
    console.log(recipes)
    return(
        <RowContainer>
            <ColumnContainer>
            {recipes.map((recipe,index) => {
                const url = `${BaseUri}${recipe.image}`
                console.log(url)
                return(
                    <>
                    <Image src={url}></Image>
                    <TextBlock>
                        <TextContainer>
                            <TitleBlock>
                                <h2>{recipe.title}</h2>
                            </TitleBlock>
                        </TextContainer>
                    </TextBlock>
                    </>
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
  height:auto;

`
const ColumnContainer = styled.div`
  flex: 25%;
  padding: 0 15px;
  height:auto;
`
const TextBlock = styled.div`
padding-top: 10px;
`
const TextContainer = styled.div`
position: relative;
z-index: 50;
margin-top: -15px;
padding-bottom: 15px;
border-radius: 15px;
background-color: #ff6f61;
overflow: hidden;
box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.15);
`
const TitleBlock = styled.div`
padding: 5px 20px;
font-family: 'Filson Soft',Arial,sans-serif;
font-weight: bold;
text-align: center;
font-size: 20px;
line-height: 1.2;
`
const Image = styled.img`
border-radius: 30%;
margin-top: 8px;
vertical-align: middle;
width:250px;
height:350px;
`
export default HomeComponent
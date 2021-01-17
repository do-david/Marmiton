import React from 'react'
import styled from 'styled-components'
import MyRecipeList from '../myRepice'
import {useSelector} from 'react-redux'
import TextButton from '../buttons/textButton'
import {useHistory} from 'react-router-dom'

const UserComponent = () => {
    const history = useHistory()
    const goToCreate = () => {
        history.push('/create')
    }
    return (
        <>
        <h1>Welcome to your kitchen!</h1>
        <RowContainer>
            <ColumnContainer>
            <TextButton label="Create Recipe" function={goToCreate}></TextButton>
            <TextButton label="Edit Recipe"></TextButton>
            </ColumnContainer>
        </RowContainer>
        {/* <MyRecipeList></MyRecipeList> */}
        </>
    )
}
const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  height:auto;

`
const ColumnContainer = styled.div`
  flex: 50%;
  padding: 0 15px;
  height:auto;
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
export default UserComponent
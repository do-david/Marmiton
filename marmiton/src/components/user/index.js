import React from 'react'
import MyRecipeList from '../myRepice'
import {useSelector} from 'react-redux'

const UserComponent = () => {
    const isAuthenticated = useSelector(state=>state.toggleAuthentication.isAuthenticatedValue)
    console.log('isAuthenticatedValue = ', isAuthenticated)
    return (
        <>
        <h1>Welcome to your kitchen!</h1>
        <MyRecipeList></MyRecipeList>
        </>
    )
}

export default UserComponent
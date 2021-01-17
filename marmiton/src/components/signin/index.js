import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useHistory } from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { toggleAuthentication } from '../../actions/authentication'

const SignInComponent = () => {
    const [formState,setFormState] = useState({username:'',password:''})
    const [errorMessage,setErrorMessage]=useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticationState = useSelector(state => state.toggleAuthentication.isAuthenticatedValue)
    console.log('IsAuthenticatedState =', isAuthenticationState)
    const submit = e => {
        e.preventDefault()
        if(!formState.username || !formState.password){
            setErrorMessage('Fields username and password need to be filled')
            return
        }
        axios( {
            method:'POST',
            url:'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username:formState.username,
                password:formState.password
            }
        })
        .then(res => {
            localStorage.setItem('token',res.headers['x-access-token'])
            console.log('connexion ok')
            dispatch(toggleAuthentication())
            console.log('IsAuthenticatedState =', isAuthenticationState)
            history.push('/user')
        })
        .catch(err => {
            setErrorMessage('Error servor, please try again')
            console.log(err)
        })
    }
    return (
        <div>
            <StyledForm onSubmit={(e) =>submit(e)}>
            <h1>Signin</h1>
            <StyledDiv>
                <StyledLabel>Username : </StyledLabel>
                <StyledInput type='text' onChange={e =>setFormState({...formState, username:e.target.value})}></StyledInput>
            </StyledDiv>
            <StyledDiv>
                <StyledLabel>Password : </StyledLabel>
                <StyledInput type='password'onChange={e =>setFormState({...formState, password:e.target.value})}></StyledInput>
            </StyledDiv>
            <StyledLabelError>{errorMessage}</StyledLabelError>
            <StyledInput type='submit'></StyledInput>
            </StyledForm>
        </div>
    )
}
const StyledForm = styled.form`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
`
const StyledDiv = styled.div`
width:auto;
height:auto;
`
const StyledLabel = styled.label`
display: inline-block;
width: 100px;
text-align: justify;
font-weight:bold;
`
const StyledLabelError = styled.label`
width: auto;
text-align: justify;
font-weight:bold;
color:red;
`
const StyledInput = styled.input`
margin: 6px 0px;
border-radius: 12px;
border: none;
background-color:#ff6f61;
height:30px;
color:white;
`
export default SignInComponent
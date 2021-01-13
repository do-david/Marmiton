import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const history = useHistory()
    const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    }
    return (
        <StyledButton onClick={handleLogout}>
            Logout
        </StyledButton>
    );
};

const StyledButton = styled.button`
padding:5px;
margin-top:25%;
height:30px;
background-color:white;
`
export default LogoutButton;
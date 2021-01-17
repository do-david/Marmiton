import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import logo from '../../assets/cutlery.png'
import loginL from '../../assets/enter.png' 
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { toggleAuthentication } from '../../actions/authentication'
import TextButton from '../buttons/textButton'
import IconButton from '../buttons/iconButton'

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1100px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1099px)' })
    const isAuthenticated = useSelector(state=>state.toggleAuthentication.isAuthenticatedValue)
    const handleLogout = () => {
        console.log('déconnexion')
        localStorage.removeItem('token')
        dispatch(toggleAuthentication())
        history.push('/')
    }
    return (
        <>
        {isDesktopOrLaptop && <NavbarDesk>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profil</li>
            </ul>
        </NavbarDesk>}
        {isTabletOrMobile && <NavbarPhone>
            <MenuContainer>
                <IconButton></IconButton>
            </MenuContainer>
            <MenuContainer>
                <ImageIcon src={logo} alt='Logo of app' onClick={()=>history.push('/home')}/>
                <Title>Marmiton</Title>
            </MenuContainer>
            <MenuContainer>
                {isAuthenticated ? <TextButton label="Logout" function={handleLogout}/> : <ImageIcon src={loginL} alt='Logo of login' onClick={()=>{
                    history.push('/')
                }
                }/>}
            </MenuContainer>
        </NavbarPhone>}
        </>
    )
}
const Title = styled.span`
color:orange;
text-align:center;
font-size:25px;
font-family:cursive;
font-weight:bold;
padding-bottom:5%;
padding-top:15px;
`
const MenuContainer= styled.div`
display:flex;
flex-direction:row;
`
const ImageIcon = styled.img`
padding-top:15px;
padding-right:15px;
height:40px;
width:40px;
`
const NavbarDesk = styled.nav`
background-color: yellow;
`
const NavbarPhone = styled.nav`
background-color: #ff6f61;
display:flex;
flex-direction:row;
justify-content:space-between;
height: 65px;
width:auto;
`
export default Header
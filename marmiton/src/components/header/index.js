import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import logo from '../../assets/cutlery.png'
import loginL from '../../assets/enter.png' 
import SignInComponent from '../signin'
import HomeComponent from '../home'

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1100px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1099px)' })
    return (
        <div>
        {isDesktopOrLaptop && <NavbarDesk>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profil</li>
            </ul>
        </NavbarDesk>}
        <Router>
        {isTabletOrMobile && <NavbarPhone>
            <MenuContainer>
                <MenuToggle>
                <Checkbox type='checkbox'/>
                <Spanphone></Spanphone>
                <Spanphone></Spanphone>
                <Spanphone></Spanphone>
            {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Profil</a></li>
            </ul> */}
            </MenuToggle>
            </MenuContainer>
            <MenuContainer>
                <Link to='/'>
                    <ImageIcon src={logo} alt='Logo of app'/>
                </Link>
            <Title>Marmiton</Title>
            </MenuContainer>
            <MenuContainer>
            <Link to='/signin'>
                <ImageIcon src={loginL} alt='Logo of login'/>
            </Link>
            </MenuContainer>
        </NavbarPhone>}
        <Switch>
            <Route path='/'>
                <HomeComponent/>
            </Route>
            <Route path='/signin'>
                <SignInComponent/>
            </Route>
        </Switch>
        </Router>
        </div>
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
const MenuToggle = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 25px;
left: 25px;
z-index: 1;
-webkit-user-select: none;
user-select: none;
`
const Checkbox = styled.input`
display: flex;
width: 40px;
height: 32px;
position: absolute;
cursor: pointer;
opacity: 0;
z-index: 2;
`
const Spanphone = styled.span`
display: flex;
width: 29px;
height: 2px;
margin-bottom: 5px;
position: relative;
background: #ffffff;
border-radius: 3px;
z-index: 1;
transform-origin: 5px 0px;
transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;
`
export default Header
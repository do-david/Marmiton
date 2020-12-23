import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'


const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1100px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
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
        {isTabletOrMobile && <NavbarPhone>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profil</li>
            </ul>
        </NavbarPhone>}
        </div>
    )
}
const NavbarDesk = styled.nav`
background-color:blue;
`
const NavbarPhone = styled.nav`
background-color:red;
`
export default Header
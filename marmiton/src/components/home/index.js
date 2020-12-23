import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'


const HomeComponent = () => {
    return(
        <ChrismastTheme>
            <p>Home</p>
        </ChrismastTheme>
    )
}
const ChrismastTheme = styled.div`
background-color:green;
color:red;
margin-top:2%;
`
export default HomeComponent
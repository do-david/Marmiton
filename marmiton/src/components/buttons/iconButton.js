import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconButton = (props) => {
    return (
        <>
            <MenuToggle>
                <Checkbox type='checkbox'/>
                <Spanphone></Spanphone>
                <Spanphone></Spanphone>
                <Spanphone></Spanphone>
            </MenuToggle>
        </>
    );
};
IconButton.propTypes = {
    icon: PropTypes.string
}
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
export default IconButton
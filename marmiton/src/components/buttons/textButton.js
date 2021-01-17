import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const TextButton = (props) => {
    return (
        <StyledButton onClick={props.function}>
            {props.label}
        </StyledButton>
    );
};
TextButton.propTypes = {
    label: PropTypes.string,
    function: PropTypes.func 
}
const StyledButton = styled.button`
    border: none;
    background-color: inherit;
    padding: 15px 15px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    :hover {
        background: #eee;
    }
`
export default TextButton;
import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSpan = styled.span`
    background-image: linear-gradient(120deg, #090404 10%, #D63C4F 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    cursor: pointer;
    cursor: hand;

    :hover{
        background-size: 100% 88%;
        color: ${props => props.colorHover}
    }
`

function LinkSpan(props) {
    return (
        <Link
            to={props.to}
            id={props.id}
            style={{ textDecoration: 'none', position: 'relative', cursor: 'pointer' }}
            className={props.className}>
            <StyledSpan
                fontSize={props.fontSize}
                color={props.color}>{props.spanText}</StyledSpan>
        </Link>
    )
}

export default LinkSpan;
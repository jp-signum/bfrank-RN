import React from 'react';
import styled from 'styled-components'

const IconImg = styled.img`
    position: relative;
    left: ${props => props.left};
    top: ${props => props.top};
    padding: ${props => props.padding};
    height: ${props => props.height};
    width: ${props => props.width};
`

const IconDiv = styled.div`
    display: inline-block;
    font-size: 1.1em;
    padding: 48px 0px 0px 20px;
`

const HoverDiv = styled.div`
    cursor: pointer;
    width: 56%;
    opacity: 0.7;
    opacity: ${props => props.opacity};
    color: rgb(199, 199, 199, 0.7);
    color: ${props => props.color};

    :hover{
        opacity: 1.0;
        color: #fffcfc;
    }
`

function Icon(props) {
    return (
        <HoverDiv 
            color={props.color}
            opacity={props.opacity}
            onClick={props.onClick}>
            <IconImg
                src={props.src}
                alt={props.alt}
                top={props.top}
                left={props.left}
                padding={props.padding}
                height={props.height}
                width={props.width} 
                alt={props.alt} />
            <IconDiv>{props.title}</IconDiv>
        </HoverDiv>
    )
}

export default Icon;
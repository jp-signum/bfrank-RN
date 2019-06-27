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
    position: relative;
`

function Icon(props) {
    return (
        <div>
            <IconImg
                src={props.src}
                alt={props.alt}
                top={props.top}
                left={props.left}
                padding={props.padding}
                height={props.height}
                width={props.width} />
            <IconDiv>{props.title}</IconDiv>
        </div>
    )
}

export default Icon;
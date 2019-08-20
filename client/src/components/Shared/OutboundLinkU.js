import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'


const StyledSpan = styled.span`
    transition:all ease 0.5s;
    -o-transition: all .5s ease;
    color: rgba(253, 253, 253, 1);
    text-decoration: underline;
    
    :hover {
        text-decoration: none;
    }
`

function OutboundLinkU(props) {
    return (
        <ReactGA.OutboundLink
            eventLabel={props.eventLabel}
            to={props.to}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}>
            <StyledSpan>{props.spanText}</StyledSpan>
        </ReactGA.OutboundLink>
    )
}

export default OutboundLinkU;
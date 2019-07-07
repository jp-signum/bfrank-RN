import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

import media from '../../theme/Device'

const StyledSpan = styled.span`
    color: rgba(255, 252, 252, 0.4);
    font-size: 0.8em;
    transition: ease 0.5s;

    :hover {
        color: rgba(255, 255, 255, 1);
    }

    ${media.phoneS`
        font-size: 0.9em;
    `}
    
    ${media.phoneM`
        font-size: 1em;
    `}
`

function OutboundLink(props) {
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

export default OutboundLink;
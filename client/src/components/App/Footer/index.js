import React from 'react'
import styled from 'styled-components'

import Copyright from './Copyright';

const FixedContainer = styled.div`
    position: fixed;
    bottom: 12px;
    right: 12px;
    color: rgba(253, 253, 253, 0.3);
    font-size: 0.6em;
`

function Footer() {
    
    return (
        <FixedContainer>
            <Copyright />
        </FixedContainer>
    )
}

export default Footer;
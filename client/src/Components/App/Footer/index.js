import React from 'react'
import styled from 'styled-components'

const FixedContainer = styled.div`
    position: fixed;
    bottom: 12px;
    right: 12px;
    color: rgba(26, 6, 6, 0.3);
    font-size: 0.6em;
`

function Footer() {
    let d = new Date(),
        currentYear = d.getFullYear();
    return (
        <FixedContainer>
            <div>&copy; {currentYear} Rave Nailz All Rights Reserved</div>
        </FixedContainer>
    )
}

export default Footer;
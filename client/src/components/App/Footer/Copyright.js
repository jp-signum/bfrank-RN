import React from 'react'
import styled from 'styled-components'

import mediaMax from '../../../theme/Device-Max'

const MobileFix = styled.div`
    display: contents;
    color: rgb(253, 253, 253, 0.5);
    
    ${mediaMax.mobile`
        display: none;
    `}
`

function Copyright() {
    let d = new Date(),
        currentYear = d.getFullYear();
        
    return (
        <MobileFix>
            &copy; {currentYear} Rave Nailz All Rights Reserved
        </MobileFix>
    )
}

export default Copyright
import React from 'react'
import styled from 'styled-components'

import SingluarItem from './SingularItem'

const Container = styled.div`

`

function SingularItemView(props) {
    
    return (
        <Container>
            <SingluarItem id={props.match.params.id} />
        </Container>
    )
}

export default SingularItemView;
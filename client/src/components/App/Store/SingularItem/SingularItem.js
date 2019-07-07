import React from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'

import { filterById, getNested } from '../../../Shared/HelperFunctions'

const Container = styled.div`

`

function SingularItem(props) {
    // const filteredPostArr = filterById(props.nails, props.id);
    // const filteredPostObj = filteredPostArr[0];
    
    console.log(props.id)
    return (
        <Container>
            <div>test:a </div>
        </Container>
    )
}

export default withContext(SingularItem);
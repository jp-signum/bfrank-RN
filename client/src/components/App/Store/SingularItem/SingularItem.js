import React, { Component } from 'react'
import styled from 'styled-components'
import { withContext } from '../../../AppContext'
import Currency from 'react-currency-formatter'

import { filterById, getNested } from '../../../Shared/HelperFunctions'

import PicSwitchMain from './PicSwitchMain'

const Container = styled.div`

`

const Quantity = styled.div`

`

const Price = styled.div`

`

class SingularItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPic: 1
        }
    }

    changeMainPicForward = () => {
        this.setState(prevState => {
            return {
                mainPic: prevState.mainPic + 1
            }
        })
    }

    changeMainPicBackward = () => {

    }

    render() {

        const filteredPostArr = filterById(this.props.nails, this.props.id);
        const filteredPostObj = filteredPostArr[0];

        const name = getNested(['name'], filteredPostObj),
            description = getNested(['description'], filteredPostObj),
            price = (getNested(['price'], filteredPostObj)/ 100),
            picturesArr = getNested(['pictures'], filteredPostObj),
            mainPicUrl = picturesArr[0],
            secondPicUrl = picturesArr[1],
            thirdPicUrl = picturesArr[2],
            fourthPicUrl = picturesArr[3],
            fithPicUrl = picturesArr[4],
            quantity = getNested(['quantity'], filteredPostObj);

     
        return (
            <Container>
                {/* <Helmet></Helmet> */}
                <PicSwitchMain
                    forward={this.changeMainPicForward}
                    mainPic={this.state.mainPic}
                    mainPicUrl={mainPicUrl}
                    secondPicUrl={secondPicUrl}
                    thirdPicUrl={thirdPicUrl}
                    fourthPicUrl={fourthPicUrl}
                    fithPicUrl={fithPicUrl}
                />
                <div>{name}</div>
                <div>{description}</div>
                <Price><Currency quantity={price} symbol="$" locale="en" /></Price>
                <Quantity>
                    {quantity != null &&
                        <div><span>Quantity: </span>{quantity}</div>
                    }
                </Quantity>
            </Container>
        )
    }
}

export default withContext(SingularItem);
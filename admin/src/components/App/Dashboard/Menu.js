import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from '../../Shared/Icon'
import RenderDB from './RenderDB'
import Logout from './Logout'

import AnalyticsGrey from '../../../assets/icons/analytics_grey.svg'
import AnalyticsWhite from '../../../assets/icons/analytics_white.svg'
import DashboardGrey from '../../../assets/icons/dashboard_grey.svg'
import DashboardWhite from '../../../assets/icons/dashboard_white.svg'
import DiscountsGrey from '../../../assets/icons/discounts_grey.svg'
import DiscountsWhite from '../../../assets/icons/discounts_white.svg'
import OrdersGrey from '../../../assets/icons/orders_grey.svg'
import OrdersWhite from '../../../assets/icons/orders_white.svg'
import ProductsGrey from '../../../assets/icons/products_grey.svg'
import ProductsWhite from '../../../assets/icons/products_white.svg'

const ViewContainer = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: #143047;
`

const ListContainer = styled.div`
   background: #6C7D8C;
   width: 22%;
   height: 100vh;
`

const DisplayContainer = styled.div`
   position: absolute;
   right: 0px;
   top: 0px;
   width: 78%;
   height: 100vh;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderComponent: 'main'
        }
    }


    render() {
        return (
            <ViewContainer>

                <ListContainer>
                    <Logout />
                    <FlexContainer>
                        <div>
                            <Icon
                                width='32px'
                                height='32px'
                                title='dashboard'
                                src={DashboardWhite} />
                        </div>
                        <div>
                            <Icon
                                width='32px'
                                height='32px'
                                src={ProductsGrey} />
                        </div>
                        <div>
                            <Icon
                                width='32px'
                                height='32px'
                                src={OrdersGrey} />
                        </div>
                        <div>
                            <Icon
                                width='32px'
                                height='32px'
                                src={AnalyticsGrey} />
                        </div>
                        <div>
                            <Icon
                                width='32px'
                                height='32px'
                                src={DiscountsGrey} />
                        </div>
                    </FlexContainer>
                </ListContainer>
                <DisplayContainer>
                    <RenderDB renderProp={this.state.renderComponent} />
                </DisplayContainer>
            </ViewContainer>
        )
    }
}

export default Menu;
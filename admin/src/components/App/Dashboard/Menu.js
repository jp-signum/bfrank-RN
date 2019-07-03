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
   background: #F2F2F2;
`

const ListContainer = styled.div`
   background: #0D0D0D;
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
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
`

const MenuItemDiv = styled.div`

`

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderComponent: 'products',
            dashboardSrc: DashboardWhite,
            dashboardOpacity: '1.0',
            dashboardColor: '#fffcfc',
            productsSrc: ProductsGrey,
            productsOpacity: '',
            productsColor: '',
            ordersSrc: OrdersGrey,
            ordersOpacity: '',
            ordersColor: '',
            analyticsSrc: AnalyticsGrey,
            analyticsOpacity: '',
            analyticsColor: '',
            discountsSrc: DiscountsGrey,
            discountsOpacity: '',
            discountsColor: '',
        }
    }

    handleDashboardClick = () => {
        this.setState({
            renderComponent: 'main',
            dashboardSrc: DashboardWhite,
            dashboardOpacity: '1.0',
            dashboardColor: '#fffcfc',
            productsSrc: ProductsGrey,
            productsOpacity: '',
            productsColor: '',
            ordersSrc: OrdersGrey,
            ordersOpacity: '',
            ordersColor: '',
            analyticsSrc: AnalyticsGrey,
            analyticsOpacity: '',
            analyticsColor: '',
            discountsSrc: DiscountsGrey,
            discountsOpacity: '',
            discountsColor: '',
        })
    }

    handleProductsClick = () => {
        this.setState({
            renderComponent: 'products',
            dashboardSrc: DashboardGrey,
            dashboardOpacity: '',
            dashboardColor: '',
            productsSrc: ProductsWhite,
            productsOpacity: '1.0',
            productsColor: '#fffcfc',
            ordersSrc: OrdersGrey,
            ordersOpacity: '',
            ordersColor: '',
            analyticsSrc: AnalyticsGrey,
            analyticsOpacity: '',
            analyticsColor: '',
            discountsSrc: DiscountsGrey,
            discountsOpacity: '',
            discountsColor: '',
        })
    }

    handleOrdersClick = () => {
        this.setState({
            renderComponent: 'orders',
            dashboardSrc: DashboardGrey,
            dashboardOpacity: '',
            dashboardColor: '',
            productsSrc: ProductsGrey,
            productsOpacity: '',
            productsColor: '',
            ordersSrc: OrdersWhite,
            ordersOpacity: '1.0',
            ordersColor: '#fffcfc',
            analyticsSrc: AnalyticsGrey,
            analyticsOpacity: '',
            analyticsColor: '',
            discountsSrc: DiscountsGrey,
            discountsOpacity: '',
            discountsColor: '',
        })
    }

    handleAnalyticsClick = () => {
        this.setState({
            renderComponent: 'analytics',
            dashboardSrc: DashboardGrey,
            dashboardOpacity: '',
            dashboardColor: '',
            productsSrc: ProductsGrey,
            productsOpacity: '',
            productsColor: '',
            ordersSrc: OrdersGrey,
            ordersOpacity: '',
            ordersColor: '',
            analyticsSrc: AnalyticsWhite,
            analyticsOpacity: '1.0',
            analyticsColor: '#fffcfc',
            discountsSrc: DiscountsGrey,
            discountsOpacity: '',
            discountsColor: '',
        })
    }

    handleDiscountsClick = () => {
        this.setState({
            renderComponent: 'discounts',
            dashboardSrc: DashboardGrey,
            dashboardOpacity: '',
            dashboardColor: '',
            productsSrc: ProductsGrey,
            productsOpacity: '',
            productsColor: '',
            ordersSrc: OrdersGrey,
            ordersOpacity: '',
            ordersColor: '',
            analyticsSrc: AnalyticsGrey,
            analyticsOpacity: '',
            analyticsColor: '',
            discountsSrc: DiscountsWhite,
            discountsOpacity: '1.0',
            discountsColor: '#fffcfc',
        })
    }


    render() {
        return (
            <ViewContainer>
                <ListContainer>
                    <Logout />
                    <FlexContainer>
                        <MenuItemDiv>
                            <Icon
                                onClick={() => this.handleDashboardClick()}
                                opacity={this.state.dashboardOpacity}
                                color={this.state.dashboardColor}
                                alt='Dashboard Icon'
                                width='36px'
                                height='36px'
                                top='8px'
                                title='Dashboard'
                                src={this.state.dashboardSrc} />
                        </MenuItemDiv>
                        <MenuItemDiv>
                            <Icon
                                onClick={() => this.handleProductsClick()}
                                color={this.state.productsColor}
                                opacity={this.state.productsOpacity}
                                alt='Products Icon'
                                width='36px'
                                height='36px'
                                top='8px'
                                title='Products'
                                src={ProductsGrey} />
                        </MenuItemDiv>
                        <MenuItemDiv>
                            <Icon
                                onClick={() => this.handleOrdersClick()}
                                color={this.state.ordersColor}
                                opacity={this.state.ordersOpacity}
                                alt='Orders Icon'
                                width='36px'
                                height='36px'
                                top='8px'
                                title='Orders'
                                src={OrdersGrey} />
                        </MenuItemDiv>
                        <MenuItemDiv>
                            <Icon
                                onClick={() => this.handleAnalyticsClick()}
                                color={this.state.analyticsColor}    
                                opacity={this.state.analyticsOpacity}
                                alt='Analytics Icon'
                                width='36px'
                                height='36px'
                                top='8px'
                                title='Analytics'
                                src={AnalyticsGrey} />
                        </MenuItemDiv>
                        <MenuItemDiv>
                            <Icon
                                onClick={() => this.handleDiscountsClick()}
                                color={this.state.discountsColor}
                                opacity={this.state.discountsOpacity}
                                alt='Discounts Icon'
                                width='36px'
                                height='36px'
                                top='8px'
                                title='Discounts'
                                src={DiscountsGrey} />
                        </MenuItemDiv>
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
import React, { Component } from 'react'
import axios from 'axios'

const itemAxios = axios.create();
itemAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const getAxios = axios.create();

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            localCart: [],
            nails: [],
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || ''
        }
    }

    getItems = () => {
        try {
            return getAxios.get('/api/store/')
                .then(response => {
                    this.setState({ nails: response.data });
                    return response;
                })
        } catch (err) {
            console.error(err)
        }
    }

    login = (credentials) => {
        return itemAxios.post('/auth/login', credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({
            localCart: [],
            user: {},
            token: ''
        })
    }

    signup = (userInfo) => {
        return itemAxios.post('/auth/signup', userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    addToCart = (id) => {
        this.setState({ localCart: [...this.state.localCart, id] })
    }

    componentDidMount() {
        this.getItems();
    }

    componentWillUnmount() {
        this.getItems();
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getItems: this.getItems,
                    addToCart: this.addToCart,
                    logout: this.logout,
                    login: this.login,
                    signup: this.signup,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}

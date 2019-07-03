import React, { Component } from 'react'
import axios from 'axios'

const itemAxios = axios.create();

itemAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            nails: [],
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || ''
        }
    }


    // remove after admin portion is finished
    componentDidMount() {
        this.getItems()
    }

    componentWillUnmount() {
        this.getItems()
    }

    getItems = () => {
        return itemAxios.get("/api/store")
            .then(response => {
                this.setState({ nails: response.data });
                return response;
            })
    }


    addItem = (newItem) => {
        return itemAxios.post("/api/store/nails/", newItem)
            .then(response => {
                this.setState(prevState => {
                    return { nails: [...prevState.nails, response.data] }
                });
                return response;
            })
    }

    editItem = (itemId, item) => {
        return itemAxios.put(`/api/store/nails/${itemId}`, item)
            .then(response => {
                this.setState(prevState => {
                    const updatedItems = prevState.nails.map(item => {
                        return item._id === response.data._id ? response.data : item
                    })
                    return { nails: updatedItems }
                })
                return response;
            })
    }

    deleteItem = (itemId) => {
        return itemAxios.delete(`/api/store/nails/${itemId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedItems = prevState.nails.filter(item => {
                        return item._id !== itemId
                    })
                    return { nails: updatedItems }
                })
                return response;
            })
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
                this.getItems();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({
            nails: [],
            user: {},
            token: ''
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getItems: this.getItems,
                    addItem: this.addItem,
                    editItem: this.editItem,
                    deleteItem: this.deleteItem,
                    login: this.login,
                    logout: this.logout,
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

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

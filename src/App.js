import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/Main';

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

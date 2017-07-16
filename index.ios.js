import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src2/App';

export default class rnReduxThucHanh extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('rnReduxThucHanh', () => rnReduxThucHanh);

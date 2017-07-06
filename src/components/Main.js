import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word';
import Filter from './Filter';

class Main extends Component {
    state = {}

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <View style={{ flex: 10 }}>
                    <FlatList
                        data={this.props.myWords}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords
    }
}

export default connect(mapStateToProps)(Main);

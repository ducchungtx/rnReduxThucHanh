import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

const { width } = Dimensions.get('window');

import getTemp from '../api/getTemp';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    getWeatherMessage() {
        const { error, isLoading, cityName, temp } = this.props;
        if(isLoading) return '...Loading';
        if(error) return 'Vui long thu lai';
        if(!cityName) return 'Nhap ten thanh pho cua ban!';
        return `${cityName} hien tai la ${temp}oC`;
    }

    getTempByCityName() {
        const { cityName } = this.state;
        // Có thể rút gọn chỉ 1 dòng thay vì 4 dòng dưới kô ?
        // this.props.startFetchData();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName, temp))
        // .catch(err => this.props.fetchError());
        // trong redux không hỗ trợ làm 1 cách trực tiếp những action bất đồng bộ chúng ta sẽ sử dụng thư viện có tên redux-thunk
        this.props.fetchDataThunk(cityName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>{this.getWeatherMessage()}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({
                        cityName: text
                    })}
                />
                <TouchableOpacity style={styles.button} onPress={this.getTempByCityName.bind(this)}>
                    <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        error: state.error,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, actionCreators)(Main)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        width: width - 50,
        paddingHorizontal: 10,
        color: 'white'
    }
});
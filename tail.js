import React, { Component } from "react";
import { View } from "react-native";
import Constants from './Constants';

export default class Tail extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('tail elements', this.props);
        let tailList = this.props.elements.map((el, idx) => {
            return <View key={idx} style={{ width: this.props.size, height: this.props.size, position: 'absolute', left: el[0] * this.props.size, top: el[1] * this.props.size, backgroundColor: 'blue' }} />
        });

        return (
            <View style={{ width: Constants.GRID_SIZE * this.props.size, height: Constants.GRID_SIZE * this.props.size }}>
                {tailList}
            </View>
        );
    }
}


//export { Tail };
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BottomMenu, Item } from "react-native-bottom-menu";

export default class Homescreen extends Component {
  render() {
    return (
      <View styles>
         
          <Button
          title="Go to Game"
          onPress={() => this.props.navigation.navigate('Game')}
/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
  },
},
})

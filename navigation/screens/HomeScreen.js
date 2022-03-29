import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


export default class Homescreen extends Component {
  render() {
    return (
      <View styles>
         
          <Button
          title="Go to game"
          onPress={() => this.props.navigation.navigate('Game')}
/>
<Button
          title="Go to scores"
          onPress={() => this.props.navigation.navigate('Scores')}
/>
<Button
          title="Go to info"
          onPress={() => this.props.navigation.navigate('Info')}
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

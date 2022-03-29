import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
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

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './navigation/screens/HomeScreen';
import GameScreen from './navigation/screens/GameScreen';
import ScoresScreen from './navigation/screens/ScoresScreen';
import InfoScreen from './navigation/screens/InfoScreen';
import { NavigationContainer } from '@react-navigation/native';
import Game from './navigation/screens/GameScreen';


const homeName = 'Home';
const gameName = 'Game';
const scoresName = 'Scores';
export default class App extends React.Component {
  render() {
    return <NavigationContainer>
      <Tab.Navigator initialRouteName={HomeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if(rn === homeName){
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === gameName){
            iconName = focused ? 'game-controller' : 'game-controller-outline'
          } else if (rn === scoresName){
            iconName = focused ? 'bar-chart' : 'bar-chart-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}>
        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={gameName} component={GameScreen}/>
        <Tab.Screen name={scoresName} component={ScoresScreen}/>

      </Tab.Navigator>
    </NavigationContainer>;
  }
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

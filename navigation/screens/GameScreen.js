
import React, { Component, useState } from 'react';
import { Button, Alert, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Constants from '../../Constants';
import { StyleSheet } from 'react-native';
import Head from '../../head';
import Food from '../../food';
import Tail from '../../tail';
import { GameLoop } from '../../GameLoop';
import { StatusBar } from 'expo-status-bar';

export default class Game extends Component {
constructor(props){
  super(props);
  this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  this.engine = null;
  this.state = {
    running: true
  }
  this.score = 0;
}


randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

onEvent = (e) => {

  if(e.type === "eat-food"){
    this.score = this.score + 1;
        this.setState({
          running: true
        })
    console.log("score is: "+this.score);
  }

  if (e.type === "game-over"){
    Alert.alert("Game Over");
    this.setState({
      running: false
    })
  }
}

reset = () => {
  this.engine.swap({
      head: { position: [0,  0], xspeed: 1, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
      food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
      tail: { size: 20, elements: [], renderer: <Tail /> }
  });
  this.score = 0;
  this.setState({
      running: true
  });
}

render() {
  return (
      <View style={styles.container}>
        <Text style={styles.teksti}>
          Score: {this.score}
        </Text>
          <GameEngine
        ref={(ref) => { this.engine = ref }}
        style={{ width: this.boardSize, height: this.boardSize, flex: null, backgroundColor: '#808080',}}
        systems={[ GameLoop ]}
        entities={{
          head: { position: [0, 0], xspeed: 1, yspeed: 0, updateFrequency: 10, nextMove: 10, size: Constants.CELL_SIZE, renderer: <Head /> },
          tail: { size: 20, elements: [], renderer: <Tail /> },
          food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: Constants.CELL_SIZE, renderer: <Food />
         }
        }}
        onEvent={this.onEvent}
        running={this.state.running}
        ></GameEngine>

          <Button title="New Game" onPress={this.reset} />

          <View style={styles.controls}>
              <View style={styles.controlRow}>
                  <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up" })} }>
                      <View style={styles.control} />
                  </TouchableOpacity>
              </View>
              <View style={styles.controlRow}>
                  <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left" })} }>
                      <View style={styles.control} />
                  </TouchableOpacity>
                  <View style={[styles.control, { backgroundColor: null}]} />
                  <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right" })}}>
                      <View style={styles.control} />
                  </TouchableOpacity>
              </View>
              <View style={styles.controlRow}>
                  <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down" })} }>
                      <View style={styles.control} />
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center'
},
controls: {
  width: 300,
  height: 300,
  flexDirection: 'column',
},
controlRow: {
  height: 100,
  width: 300,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
},
control: {
  width: 100,
  height: 100,
  backgroundColor: 'black'
},
teksti: {
  fontSize: 30,
  margin: 4,
  color: 'black'
}
});

import React, { Component } from 'react';
import { Button, Alert, View, Text, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Constants from '../../Constants';
import { StyleSheet } from 'react-native';
import Head from '../../Head';
import Food from '../../Food';
import { GameLoop } from '../../GameLoop';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default class Game extends Component {
constructor(props){
  super(props);
  this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  this.engine = null;
  this.state = {
    running: true
  }
}

onEvent = (e) => {
  if (e.type === "game-over"){
    Alert.alert("Game Over");
    this.setState({
      running: false
    })
  }
}

randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


  render() {
    return (
      <View style={styles.container}>
        <GameEngine
        ref={(ref) => { this.engine = ref }}
        style={{ width: this.boardSize, height: this.boardSize, flex: null, backgroundColor: '#ffffff'}}
        systems={[ GameLoop ]}
        entities={{
          head: { position: [0, 0], xspeed: 1, yspeed: 0, updateFrequency: 10, nextMove: 10, size: Constants.CELL_SIZE, renderer: <Head /> },
          food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: Constants.CELL_SIZE, renderer: <Food /> }
        }}
        onEvent={this.onEvent}
        running={this.state.running}
        />
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
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column'

  },
  controlRow: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});
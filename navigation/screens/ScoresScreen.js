import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GameLoop } from '../../GameLoop';
import { GameScreen } from '../../navigation/screens/GameScreen';

const Scores = () => (
  <View style={styles.container}>
    <Text style={styles.title}>High Score</Text>
    <Text style={styles.score}>Name      Campus       Score</Text>
    <Text style={styles.user}> Markus    Nokia        15</Text>
    <Text style={styles.user} >Mirka     Metropolia   5</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
  },
  score: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold'
  },
  user: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 18,
  }
  });

export default Scores;
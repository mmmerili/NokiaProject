import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GameLoop } from '../../GameLoop';
import { GameScreen } from '../../navigation/screens/GameScreen';

const Scores = () => (
  <View style={styles.container}>
    <Text style={styles.title}>High Score</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#eaeaea",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Scores;
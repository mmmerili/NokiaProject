import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Homescreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Snake Game</Text>
    <Text style={styles.info}>Start playing iconic snake game to get the best score of the campus by pressing game button. Enjoy! </Text>
    <Text style={styles.nokiaHeder}>Did you know this about Nokia? </Text>
    <Text style={styles.nokia}>In March 2022 we were named for the fifth consecutive year (2018-2022), and the sixth time overall as one of the World’s Most Ethical Companies by Ethisphere. </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
  },
  info: {
    marginTop: 10,
    paddingVertical: 20,
    marginBottom:100,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
  },
  nokiaHeder: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 19,
  },
  nokia: {
    marginTop: 10,
    paddingVertical: 20,
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 17,
  }
}
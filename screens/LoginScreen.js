import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeading from '../components/AppHeading';
import HomeScreen from './HomeScreen';
import Luncch from './Luncch';

export default class App extends Component {
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View>
      <AppHeading />
        <TouchableOpacity
          onPress={() => {
            this.goToHomeScreen();
          }}>
          <Text style={styles.goButton}>Let's go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'CENTER',
    margin: 225,
    padding: 10,
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderRadius: 15,
    textAlign: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
  }
});

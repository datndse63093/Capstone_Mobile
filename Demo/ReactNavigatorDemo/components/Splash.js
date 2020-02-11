import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    console.log('Splash screen');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Splash Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

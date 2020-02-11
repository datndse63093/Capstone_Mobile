import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/CustomStyle';

export default class SplashScreen extends Component {
  render() {
    console.log('Splash screen');
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>Splash Screen</Text>
      </View>
    );
  }
}

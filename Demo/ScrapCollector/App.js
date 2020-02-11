/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import {View, Text} from 'react-native';
import HomeownerTabNavigator from './components/HomeownerTabNavigator';
import CollectorTabNavigator from './components/CollectorTabNavigator';

export default class App extends Component {
  render() {
    // return <HomeownerTabNavigator />;
    return <CollectorTabNavigator />;
  }
}

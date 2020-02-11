import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    let greeting = ' Hello world ';
    return (
      <View>
        <Text>{greeting}</Text>
      </View>
    );
  }
}

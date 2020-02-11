import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={event => {
            //Call this action in Container
            this.props.onItemClick(this.props.taskId);
          }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
        <Text
          style={{
            margin: 20,
            color: this.props.completed == true ? 'red' : 'black',
          }}>
          {this.props.taskName} , {this.props.taskId}
        </Text>
      </View>
    );
  }
}

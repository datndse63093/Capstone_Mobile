//Root Component
import React, {Component} from 'react';
import {View, Platform} from 'react-native';

//thêm AddComponent và TaskListComponent, nhưng mà 2 component này có action -> add container
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <AddContainer />
        <TaskListContainer />
      </View>
    );
  }
}

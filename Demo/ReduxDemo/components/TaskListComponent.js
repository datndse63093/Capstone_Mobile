import React, {Component} from 'react';
import {FlatList} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {
  render() {
    return (
      <FlatList
        //tasks chính là cái lấy ra được bên trong taskListContainer
        data={this.props.tasks}
        renderItem={({item, index}) => {
          return <TaskItemContainer {...item} />;
        }}
        keyExtractor={(item, index) => item.taskName}
      />
    );
  }
}

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, Alert} from 'react-native';
import flatListData from '../data/FlatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  render() {
    const swipeOutSettings = {
      autoClose: true,
      onClose: () => {},
      onOpen: () => {},
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure to delete this item?',
              [
                {
                  text: 'No', onPress: () => console.log('Cancel delete'),
                  style: 'cancel',
                },
                {text: 'Sure', onPress: () => { console.log('Delete'); }},
                ,
              ],
              {
                cancelable: true,
              },
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };

    return (
      <Swipeout {...swipeOutSettings}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // backgroundColor: this.props.index % 2 == 0 ? 'green' : 'tomato',
              backgroundColor: 'white',
            }}>
            <Image
              source={{uri: this.props.item.imageUrl}}
              style={{width: 100, height: 100, margin: 5}}
            />
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={(styles.flatListItem, styles.flatListItemTitle)}>
                {this.props.item.name}
              </Text>
              <Text style={styles.flatListItem}>{this.props.item.desc}</Text>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: 'black'}} />
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  flatListItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  flatListItem: {
    color: 'black',
    padding: 10,
    fontSize: 16,
  },
});
export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification from 'react-native-push-notification';
import firebase from 'react-native-firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fcmToken: null,
    };
  }

  async componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: token => {
        if (token.token !== undefined) {
          this.token = token.token;
          console.log('Token: ' + this.token);
        } else {
          console.log(JSON.stringify(token));
        }
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: notification => {
        if (notification.foreground) {
          Alert.alert(notification.message);
        }
        console.log('NOTIFICATION:', notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('user has permission');
        } else {
          console.log("user doesn't have permission");
          this.NotiPermission();
        }
      });

    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('fcmToken from AsyncStorage: ', fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log('fcmToken from firebase: ', fcmToken);
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }

    this.setState({fcmToken});
  }

  async NotiPermission() {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        console.log('user has authorized');
      })
      .catch(error => {
        console.log('User has rejected permission');
      });
  }

  async sendNotification() {
    // console.log('In sendNoti: ' + this.state.fcmToken);
    const FIREBASE_API_KEY = 'AIzaSyCtDARV8KyjvOPLKMHUKVcLqeZsynzRdL4';
    const message = {
      //each time install on a device, add the token
      registration_ids: [
        this.state.fcmToken,
        // 'dcQS0zcRTbM:APA91bFm2prv0T9-CCr_3KrVPxgNE6NIiFfF0WZEhTl9HjczLAQ-vB2U6H5V_poFxI5jepMSqnMvNMOGAqrLfxoYiffkIpppaCybSqGNRZzesdA9wnMSYfMZYX8Gf42aDzAbOGjJAy6b',
      ],
      notification: {
        title: 'Developers',
        body: 'Hehe',
        vibrate: 1,
        sound: 1,
        show_in_foreground: true,
        priority: 'high',
        content_available: true,
      },
    };

    let headers = new Headers({
      'Content-type': 'application/json',
      Authorization: 'key=' + FIREBASE_API_KEY,
    });

    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });
    response = await response.json();
    console.log(response);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text> Receive Push notification</Text>

        <Text> Send Push notification</Text>
        <Button
          title="Send notification"
          onPress={() => this.sendNotification()}
        />
      </View>
    );
  }
}

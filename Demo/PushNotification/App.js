import React, {Component} from 'react'
import PushNotification from '@react-native-community/push-notification-ios'
import { View, Text } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  async componentDidMount(){
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  }
  render(){
    return(
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text>Test received NOTIFICATION</Text>
      </View>
    );
  }
}
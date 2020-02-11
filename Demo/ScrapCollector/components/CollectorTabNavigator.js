import React from 'react';
import {Text, View, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Collector/HomeScreen';
import ProfileScreen from '../screens/Collector/ProfileScreen';
import ChatScreen from '../screens/Collector/ChatScreen';
import MapScreen from '../screens/Collector/MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../styles/CustomColor';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Map: {screen: MapScreen},
    Chat: {screen: ChatScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: `${COLORS.activeTintColor}`,
      inactiveTintColor: `${COLORS.inactiveTintColor}`,
      showLabel: false,
    },
  },
);

const TabNavigator = createAppContainer(BottomTabNavigator);

export default TabNavigator;

class IconWithBadge extends React.Component {
  render() {
    const {name, badgeCount, color, size} = this.props;
    return (
      <View style={{width: 24, height: 24, margin: 5}}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: `${COLORS.red}`,
              borderRadius: 8,
              width: 16,
              height: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: `${COLORS.white}`,
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const ChatIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={5} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (Platform.OS === 'ios') {
    // console.log('Custom Tab Navigator - IOS');
    if (routeName === 'Home') {
      iconName = focused ? 'ios-albums' : 'ios-albums';
      // If want to add badges to home tab icon
      IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Profile') {
      iconName = focused ? 'ios-person' : 'ios-person';
    } else if (routeName === 'Chat') {
      iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
      IconComponent = ChatIconWithBadge;
    } else if (routeName === 'Map') {
      iconName = focused ? 'ios-map' : 'ios-map';
    }
  } else if (Platform.OS === 'android') {
    // console.log('Custom Tab Navigator - ANDROID');
    if (routeName === 'Home') {
      iconName = focused ? 'md-albums' : 'md-albums';
      // If want to add badges to home tab icon
      IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Profile') {
      iconName = focused ? 'md-person' : 'md-person';
    } else if (routeName === 'Chat') {
      iconName = focused ? 'md-chatbubbles' : 'md-chatbubbles';
      IconComponent = ChatIconWithBadge;
    } else if (routeName === 'Map') {
      iconName = focused ? 'md-map' : 'md-map';
    }
  }

  return <IconComponent name={iconName} size={26} color={tintColor} />;
};

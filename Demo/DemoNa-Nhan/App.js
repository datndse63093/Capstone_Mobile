import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, {Component} from 'react';

import CollectorScreen from './src/screens/collector/collectorScreen';
import HomeOwnerScreen from './src/screens/HomeownerScreen';
import SignInScreen from './src/screens/SignInScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import HomeScreen from './src/screens/HomeScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Collector: CollectorScreen,
    HomeOwner: HomeOwnerScreen
});
const AuthStack = createStackNavigator({
    SignIn: SignInScreen
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

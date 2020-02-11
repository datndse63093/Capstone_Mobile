/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// import SplashScreen from './screens/SplashScreen';
// import LoginScreen from './screens/LoginScreen';

AppRegistry.registerComponent(appName, () => App);

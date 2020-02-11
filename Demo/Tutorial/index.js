/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import HelloWorld from './components/HelloWorld';
import BasicFlatList from './components/BasicFlatList';

AppRegistry.registerComponent(appName, () => BasicFlatList);

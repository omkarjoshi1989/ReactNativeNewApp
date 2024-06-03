/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ProApp from './ProApp';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProApp);
//AppRegistry.registerComponent(appName, () => App);
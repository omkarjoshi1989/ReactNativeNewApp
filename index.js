/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import ReactNativeCollection from './ReactNativeCollection';
//import ProApp from './ProApp';
//import App from './App';
import {name as appName} from './app.json';
import PasswordGenerator from './components/ownProjects/PasswordGenerator';

AppRegistry.registerComponent(appName, () => PasswordGenerator);
//AppRegistry.registerComponent(appName, () => ReactNativeCollection);
//AppRegistry.registerComponent(appName, () => ProApp);
//AppRegistry.registerComponent(appName, () => App);
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import wrapper from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => wrapper);

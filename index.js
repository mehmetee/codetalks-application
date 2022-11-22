/**
 * @format
 */

import {AppRegistry} from 'react-native';
import wrapper from './src/wrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => wrapper);

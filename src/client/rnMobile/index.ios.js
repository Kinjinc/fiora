/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import './util/reactotron.js';
import Index from './module/index.js';

export default class Fiora extends Component {
    render() {
        return Index;
    }
}

AppRegistry.registerComponent('fiora', () => Fiora);

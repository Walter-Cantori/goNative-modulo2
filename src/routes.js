import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import { colors } from './styles';

import RepoList from './pages/RepoList';
import Issues from './pages/Issues';

const createNavigator = () =>
    StackNavigator({
        List: { screen: RepoList },
        Issues: { screen: Issues },
    }, {
        initialRouteName: 'List',
    })

export default createNavigator;
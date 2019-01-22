import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import QuestScreen from '../screens/QuestScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VotingScreen from '../screens/VotingScreen';
import JoinGameScreen from '../screens/JoinGameScreen';
import NewGameScreen from '../screens/NewGameScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  JoinGame: JoinGameScreen,
  NewGame: NewGameScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const QuestStack = createStackNavigator({
  Quests: QuestScreen,
});

QuestStack.navigationOptions = {
  tabBarLabel: 'Quest Board',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

const VotingStack = createStackNavigator({
  Voting: VotingScreen,
});

VotingStack.navigationOptions = {
  tabBarLabel: 'Vote',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-checkbox-outline' : 'md-checkbox-outline'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  QuestStack,
  VotingStack,
});

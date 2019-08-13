import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';

// navigation screens
import SecondScreen from './navigation/SecondScreen';
import FirstScreen from './navigation/FirstScreen';
import WelcomeScreen from './navigation/WelcomeScreen.jsx';


const AppNavigator = createStackNavigator({

  WelcomeScreen: { screen: WelcomeScreen },
  FirstScreen: { screen: FirstScreen },
  SecondScreen: { screen: SecondScreen },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer/>

export default App;


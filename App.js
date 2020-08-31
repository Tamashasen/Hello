//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Home from './src/screens/homeScreen';
import Login from './src/screens/login';
import Signup from './src/screens/signup';





const Stack = createStackNavigator({
  Signup: Signup,
  Home: Home,
  Login: Login,
  
  
},
  {
    initialRouteName: 'Signup'
  });


export default createAppContainer(Stack);



import React, { Component } from 'react';
import Home from '../screens/homeScreen';
import Mychat from '../screens/mychat';
import Profile from '../screens/profile';
import ViewProfile from '../screens/viewProfile';
import EditProfile from '../screens/editProfile';
import Signup from '../screens/signup';
import Login from '../screens/login';

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer, StackViewTransitionConfigs } from 'react-navigation';
import { Platform } from "react-native";

const HomeStack = createStackNavigator(
  {
   Home,
   Mychat,
   ViewProfile,
   Profile,
   EditProfile,
  });

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
    inactveTintColor: Colors.secondaryColor

  },
};

const UserStack = createStackNavigator(
  { 
    Profile,
    ViewProfile,
    EditProfile,
  });

UserStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
    inactveTintColor: Colors.secondaryColor

  },
};


const RootSwitch = createSwitchNavigator(
  { Signup,
    Login, 
    HomeStack,
    UserStack,
     
},
  { initialRouteName: "Signup" }
);
const Stack = createStackNavigator({
    Signup,
    Login, 
    HomeStack,
    UserStack,
    Home, 
    Mychat,
    ViewProfile,
    Profile,
    EditProfile,  
},
  {
    initialRouteName: 'Signup'
  });

const App = createAppContainer(RootSwitch);
export default App;
//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/homeScreen';
import Login from './src/screens/login';
import Signup from './src/screens/signup';



const Stack = createStackNavigator({
  Signup:Signup,
  Home:Home,
  Login:Login,
},
  {
    initialRouteName: 'Signup'
  });

// create a component

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

/*export default function App(AppNavigator) {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}*/
export default createAppContainer(Stack);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%'


  },
});


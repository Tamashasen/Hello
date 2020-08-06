import React from 'react'
import { View, Text } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NavigationDrawerStructure from '../components/drawerHeader'
import ViewProfile from './viewProfile';
import EditProfile from './editProfile';

const Stack = createStackNavigator();

export default function Profile({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="ViewProfile">
        <Stack.Screen name="ViewProfile" component={ViewProfile} options={{
          title: 'My Account', headerStyle: {
            backgroundColor: '#3096EE'
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
        }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{
          title: 'Edit Account', headerStyle: {
            backgroundColor: '#3096EE',
          },
          headerTitleStyle: {
            color: 'white',
          },

          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>

  )
}

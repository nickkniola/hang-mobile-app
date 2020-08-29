import * as React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pairing from './components/PairingComponent';
import Suggest from './components/SuggestComponent';
import Profile from './components/ProfileComponent';

const Stack = createStackNavigator();

const PairingStack = createStackNavigator();
function PairingStackScreen() {
  return (
    <PairingStack.Navigator>
      <PairingStack.Screen
        name='Pairing'
        component={Pairing}
      />
    </PairingStack.Navigator>
  )
}

const SuggestStack = createStackNavigator();
function SuggestStackScreen() {
  return (
    <SuggestStack.Navigator>
      <SuggestStack.Screen name='Suggestion' component={Suggest} />
    </SuggestStack.Navigator>
  )
}


const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <SuggestStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pairing" component={PairingStackScreen} />
      <Stack.Screen name="Suggestion" component={SuggestStackScreen} />
      <Stack.Screen name="Profile" component={ProfileStackScreen} />
    </Stack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="PairingScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="PairingScreen"
        component={PairingStackScreen}
        options={{
          tabBarLabel: 'Pairing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SuggestScreen"
        component={SuggestStackScreen}
        options={{
          tabBarLabel: 'Suggestion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({

})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


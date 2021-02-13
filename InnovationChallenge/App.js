import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homescreen from './components/screens/homescreen'
import Mapscreen from './components/screens/mapscreen'
import Accountscreen from './components/screens/accountscreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'ios-map';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-list-box' : 'ios-list-box';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'crimson',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Map" component={Mapscreen} />
        <Tab.Screen name="Account" component={Accountscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
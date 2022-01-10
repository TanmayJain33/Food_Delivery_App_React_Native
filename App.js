import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RestaurantScreen, OrderDeliveryScreen} from './screens/index';
import BottomTabNavigator from './navigation/tabNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

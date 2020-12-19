import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantDetails from '../RestaurantDetails';
import RestaurantList from '../Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Restaurants">
      <Stack.Screen name="Restaurants" component={RestaurantList} />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;

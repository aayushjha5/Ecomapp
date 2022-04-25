import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen component={ShoppingCartScreen} name="cart"
          options={{title: 'Shopping Cart'}} />
          <Stack.Screen component={AddressScreen} name="Address"
          options={{title: 'Address'}} />
      </Stack.Navigator>
  )
}

export default ShoppingCartStack;
import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import AddressScreen from '../screens/AddressScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, inactiveTintColor: '#A0D5E8', activeTintColor: '#05719D' }}>
            <Tab.Screen component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={25} />
                    ), headerShown: false,
                }} />
            <Tab.Screen component={AddressScreen} name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user-circle-o" color={color} size={25} />
                    ), headerShown: false,
                }} />
            <Tab.Screen component={ShoppingCartStack} name="Shopping Cart"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" color={color} size={25} />
                    ), headerShown: false,
                }} />
            <Tab.Screen component={HomeStack} name="More"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="menu" color={color} size={25} />
                    ), headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNav;
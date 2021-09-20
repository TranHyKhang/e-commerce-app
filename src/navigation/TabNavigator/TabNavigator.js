import React from 'react';

//Import tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import screens
import {
    HomeScreen,
    CatalogScreen,
    ProfileScreen
} from '../../screens'

//Declare tab navigator
const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen component={HomeScreen} name='HomeScreen'/>
            <Tab.Screen component={CatalogScreen} name='CatalogScreen'/>
            <Tab.Screen component={ProfileScreen} name='ProfileScreen'/>
        </Tab.Navigator>
    )
}
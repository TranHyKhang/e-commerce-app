import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Import Screen
import {
    ProfileScreen,
    CartScreen,
    OrderConfirmScreen
} from '../../screens'

const Stack = createStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({route}) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Stack.Screen name='CartScreen' component={CartScreen}/>
            <Stack.Screen name='OrderConfirmScreen' component={OrderConfirmScreen}/>
        </Stack.Navigator>
    )
}
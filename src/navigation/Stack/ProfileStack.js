import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Import Screen
import {
    ProfileScreen,
    CartScreen,
    OrderConfirmScreen,
    LoginScreen,
    SignUpScreen
} from '../../screens'

const Stack = createStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({route}) => ({
                headerShown: false
            })}
            initialRouteName='ProfileScreen'
        >
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Stack.Screen name='CartScreen' component={CartScreen}/>
            <Stack.Screen name='OrderConfirmScreen' component={OrderConfirmScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </Stack.Navigator>
    )
}
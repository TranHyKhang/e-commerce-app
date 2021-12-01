import React from 'react'
import { View, Text } from 'react-native'


//Import create stack navigator
import {createStackNavigator} from '@react-navigation/stack'

//Import Screen
import { HomeScreen, ProductDetailScreen } from '../../screens';

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={({route}) => ({
                headerShown: false
            })}
        >
            <Stack.Screen 
                component={HomeScreen} 
                name='HomeScreen'
            />
            <Stack.Screen 
                component={ProductDetailScreen} 
                name='ProductDetailScreen'
            />
        </Stack.Navigator>
    )
}

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Import Screen
import {
    CatalogScreen,
    BrandDetailScreen
} from '../../screens'

const Stack = createStackNavigator();

export const CatalogStack = () => {
    return (
        <Stack.Navigator
        screenOptions={({route}) => ({
            headerShown: false
        })}
        >
            <Stack.Screen name='CatalogScreen' component={CatalogScreen}/>
            <Stack.Screen name='BrandDetailScreen' component={BrandDetailScreen}/>
        </Stack.Navigator>
    )
}
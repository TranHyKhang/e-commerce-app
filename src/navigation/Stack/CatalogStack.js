import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Import Screen
import {
    CatalogScreen,
    BrandDetailScreen,
    ProductDetailScreen,
    CartScreen
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
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}/>
            <Stack.Screen name='CatalogCartScreen' component={CartScreen}/>
        </Stack.Navigator>
    )
}
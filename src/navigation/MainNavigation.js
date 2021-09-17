import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { HomeScreen } from '../screens';


import {View, Text} from 'react-native'

const Stack = createStackNavigator();

export function MainNavigation() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={HomeScreen} name='HomeScreen'/>
            </Stack.Navigator>
        </NavigationContainer>

        // <View>
        //     <Text>haaaaaaaaaaaha</Text>
        // </View>
        
    )
}

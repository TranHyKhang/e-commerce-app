import React from 'react';

//Import navigation container
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from './TabNavigator'

export function MainNavigation() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

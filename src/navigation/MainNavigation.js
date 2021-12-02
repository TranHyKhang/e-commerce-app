import React, {useState, useEffect} from 'react';


//Import navigation container
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from './TabNavigator'

import {SplashScreen} from '../screens/SplashScreen'

export function MainNavigation() {

    const [isLoading, setIsLoading] = useState(true);

    const performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            2000
        )
        );
    }

    useEffect(async() => {
        const data = await performTimeConsumingTask();
        if(data !== null) {
            setIsLoading(false)
        }
    }, [isLoading])

    return (
        <NavigationContainer>
            {
                isLoading ?
                <SplashScreen/>
                :
                <TabNavigator/>

            }
        </NavigationContainer>
    )
}

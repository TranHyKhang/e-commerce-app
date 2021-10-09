import React from 'react';

//Import tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import screens
import {
    CatalogScreen,
    ProfileScreen
} from '../../screens';

//Import icon
import FeatherIcon from 'react-native-vector-icons/Feather'

//Import Stack
import {HomeStack} from '../HomeStack'

//import components
import {RenderTabBarItem} from './components'

//Import colors from utils
import Colors from '../../utils/Colors'



//Declare tab navigator
const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.bottom_tab_gray,
                    position: 'absolute',
                    bottom: 5,
                    left: 40, 
                    right: 40,
                    height: 60,
                    borderRadius: 30
                    
                },
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    // if(route.name == 'HomeStack') {
                    //     return <RenderTabBarItem name='compass' size={30} title='Discover'/>
                    // }
                    switch(route.name) {
                        case 'HomeStack':
                            return <RenderTabBarItem 
                                name='compass' 
                                size={30} 
                                title='Discover'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                        case 'CatalogScreen':
                            return <RenderTabBarItem 
                                name='search' 
                                size={30} 
                                title='Catalog'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                        case 'ProfileScreen':
                            return <RenderTabBarItem 
                                name='user' 
                                size={30} 
                                title='Profile'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                    }
                }
            })}
        >
            <Tab.Screen component={HomeStack} name='HomeStack'/>
            <Tab.Screen component={CatalogScreen} name='CatalogScreen'/>
            <Tab.Screen component={ProfileScreen} name='ProfileScreen'/>
        </Tab.Navigator>

    )
}
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

//Import redux hook
import {useSelector} from 'react-redux'


//Declare tab navigator
const Tab = createBottomTabNavigator();

export function TabNavigator() {

    const isScollDown = useSelector(state => state.tabNavigatorReducer.isScrollDown);

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.bottom_tab_gray,
                    position: 'absolute',
                    bottom: 4,
                    left: 40, 
                    right: 40,
                    height: 60,
                    borderRadius: 30,
                    opacity: isScollDown ? 0 : 1
                    
                },
                headerShown: false,
                tabBarIcon: ({focused}) => {
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
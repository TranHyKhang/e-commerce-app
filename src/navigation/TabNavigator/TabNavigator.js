import React from 'react';

//Import tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


//Import Stack
import {
    HomeStack, 
    CatalogStack,
    ProfileStack
} from '../Stack'

//import components
import {RenderTabBarItem} from './components'

//Import colors from utils
import Colors from '../../utils/Colors'

//Import redux hook
import {useSelector} from 'react-redux'


//Declare tab navigator
const Tab = createBottomTabNavigator();

export function TabNavigator() {

    const isHide = useSelector(state => state.tabNavigatorReducer.isHide);



    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    // backgroundColor: Colors.bottom_tab_gray,
                    backgroundColor: 'black',
                    position: 'absolute',
                    bottom: 20,
                    left: 70, 
                    right: 70,
                    height: 60,
                    borderRadius: 30,
                    opacity:  0.8,
                    display: isHide ? 'none' : 'flex',
                    borderColor: 'black'
                    // display: 'flex',
                
                    
                },
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    switch(route.name) {
                        case 'HomeStack':
                            return <RenderTabBarItem 
                                name='compass' 
                                size={28} 
                                title='Discover'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                        case 'CatalogStack':
                            return <RenderTabBarItem 
                                name='search' 
                                size={28} 
                                title='Catalog'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                        case 'ProfileStack':
                            return <RenderTabBarItem 
                                name='user' 
                                size={28} 
                                title='Profile'
                                color={focused ? Colors.tab_button_focused_blue : Colors.white}
                                />
                    }
                }
            })}
        >
            <Tab.Screen component={HomeStack} name='HomeStack'/>
            <Tab.Screen component={CatalogStack} name='CatalogStack'/>
            <Tab.Screen component={ProfileStack} name='ProfileStack'/> 
        </Tab.Navigator>

    )
}
import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native'

import Colors from '../../../../../utils/Colors';

//Icon
import Entypo from 'react-native-vector-icons/Entypo'
//location-pin
//dropbox
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//truck-delivery
export function RenderOrderStatus({item}) {
    return (
        <View style={styles.container}>
            <View 
                style={[
                    styles.wrapIcon,
                    {
                        backgroundColor: Colors.pink_fire
                    }
                ]}
            >
                <Entypo name='dropbox' size={25}/>
            </View>


            <View 
                style={[
                    styles.lineStyle,
                    {
                        backgroundColor: item.orderStatus > 0 ? Colors.pink_fire : Colors.sub_title_color
                    }
                ]}
            >
            </View>
            <View style={[
                styles.wrapIcon,
                {
                    backgroundColor: item.orderStatus > 0 ? Colors.pink_fire : Colors.sub_title_color
                }
            ]}>
                <MaterialCommunityIcons name='truck-delivery' size={25}/>
            </View>

            <View style={[
                    styles.lineStyle,
                    {
                        backgroundColor: item.orderStatus > 1 ? Colors.pink_fire : Colors.sub_title_color
                    }
                ]}></View>
            <View style={[
                styles.wrapIcon,
                {
                    backgroundColor: item.orderStatus > 1 ? Colors.pink_fire : Colors.sub_title_color
                }
            ]}>
                <Entypo name='location-pin' size={25}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },
    lineStyle: {
        width: 60,
        height: 5,
    },
    wrapIcon: {
        padding: 10,
        borderRadius: 100,
    }
})

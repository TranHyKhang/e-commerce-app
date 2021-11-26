import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';

import Colors from '../../../../../utils/Colors';

import Entypo from 'react-native-vector-icons/Entypo';

import {RenderDetailOrder} from './RenderDetailOrder';

export function RenderOrderItem({item}) {
    
    const [isClick, setIsClick] = useState(false);

    return (
        <TouchableOpacity 
            onPress={() => setIsClick(!isClick)}
            activeOpacity={0.9}
        >
            <View style={styles.container}>
                <View 
                    style={[
                        styles.wrapText,
                        {
                            justifyContent: 'space-between',
                            padding: 10
                        }
                    ]}
                >
                    <View>
                        <View style={styles.wrapText}>
                            <Text style={styles.labelStyle}>Code: </Text>
                            <Text style={styles.valueStyle}>{item._id}</Text>
                        </View>
                        <View style={styles.wrapText}>
                            <Text style={styles.labelStyle}>Order date: </Text>
                            <Text style={styles.valueStyle}>{item.time.substring(0, 10)}</Text>
                        </View>
                    </View>
                    
                    <View>
                        {
                            isClick ?
                            <Entypo name='chevron-down' size={30} color={Colors.tab_button_focused_blue}/>
                            :
                            <Entypo name='chevron-right' size={30} color={Colors.tab_button_focused_blue}/>
                            
                        }
                    </View>
                </View>

                <View 
                    style={{
                        display: isClick ? 'flex' : 'none'
                    }}
                >
                    <RenderDetailOrder item={item}/>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Colors.tab_button_focused_blue
    },
    wrapText: {
        display: 'flex',
        flexDirection: 'row',
    },
    valueStyle: {
        color: Colors.tab_button_focused_blue,
        fontWeight: '700'
    },
    labelStyle: {
        fontWeight: '700',
        paddingBottom: 5
    }
})

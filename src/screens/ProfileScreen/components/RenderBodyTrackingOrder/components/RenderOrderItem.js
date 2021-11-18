import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Colors from '../../../../../utils/Colors';

import Entypo from 'react-native-vector-icons/Entypo'

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
                            justifyContent: 'space-between'
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
                        <Entypo name='chevron-right' size={30} color={Colors.tab_button_focused_blue}/>
                    </View>
                </View>

                <View 
                    style={{
                        display: isClick ? 'flex' : 'none'
                    }}
                >
                    <Text>haha</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    wrapText: {
        display: 'flex',
        flexDirection: 'row'
    },
    valueStyle: {
        color: Colors.tab_button_focused_blue,
        fontWeight: '700'
    },
    labelStyle: {
        fontWeight: '700'
    }
})

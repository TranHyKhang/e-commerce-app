import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

export function RenderSettingItem({lable, iconName, _handleTouchEvent}) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={_handleTouchEvent}
        >
            <View style={styles.container}>
                <Text style={styles.lableStyle}>{lable}</Text>
                <Entypo 
                    name={iconName} 
                    size={20}
                    style={styles.iconStyle}
                />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.8
    },
    lableStyle: {

    },
    iconStyle: {
        marginLeft: 10
    }
})
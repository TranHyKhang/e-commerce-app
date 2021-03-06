import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Colors from '../../../utils/Colors'

export function RenderSizeItem({item, _handleTouchEvent, size}) {
    function isClick() {
        if(size == item.productSize) {
            return true;
        }
        return false;
    }

    function isDisable() {
        if(item.inventory < 1) {
            return true;
        } 
        return false
    }
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => _handleTouchEvent(item.productSize)}
            disabled={isDisable()}
        >
            <View 
                style={[
                    styles.container, 
                    {
                        borderColor: isClick() ? 
                            Colors.pink_fire 
                            : 
                            isDisable() ?
                            '#aaa'
                            :
                            Colors.sub_title_color
                    }
                ]}
            >
                <Text 
                    style={{
                        fontWeight: '800',
                        color: isDisable() ? '#aaa': Colors.black 
                    }}
                >
                    {item.productSize}
                </Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.black
    }
})

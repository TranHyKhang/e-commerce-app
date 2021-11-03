import React from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';
import {RadioButton} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../../../utils/Colors';

export function RenderPaymentMethodItem({value, checked, _handleRadioButtonOnPress, label, iconName}) {

    function isChecked() {
        if(checked == value) {
            return true;
        } 
        return false;
    }

    return (
        <View style={styles.container}>
            <RadioButton
                value={value}
                status={isChecked() ? 'checked' : 'unchecked'}
                onPress={_handleRadioButtonOnPress}
            />
            <View style={styles.wrapLabel}>
                <FontAwesome 
                    style={styles.icon} 
                    name={iconName} 
                    size={30} 
                    color={isChecked() ? Colors.tab_button_focused_blue : Colors.bottom_tab_gray}
                />
                <Text style={[styles.label, {color: isChecked() ? Colors.tab_button_focused_blue : Colors.bottom_tab_gray}]}>{label}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapLabel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    label: {
        fontWeight: '700',
        marginLeft: 10,
        flex: 9

    },
    icon: {
        flex: 1.3
    }
})

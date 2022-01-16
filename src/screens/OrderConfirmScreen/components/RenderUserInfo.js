import React from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';

import {useSelector} from 'react-redux';

import Colors from '../../../utils/Colors';

export function RenderUserInfo() {

    const user = useSelector(state => state.authReducer.user);
    const userTemp = useSelector(state => state.authReducer.userTemp);

    function selectUserState() {
        if(user == null) {
            return userTemp;
        } else {
            return user;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapContent}>
                <Text style={styles.label}>Name: </Text>
                <Text style={styles.value}>{selectUserState().userName}</Text>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.label}>Phone number: </Text>
                <Text style={styles.value}>{selectUserState().userPhoneNumber}</Text>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.label}>Address </Text>
                <Text style={styles.value}>{selectUserState().userAddress}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        padding: 10,
        paddingBottom: 20
    },
    wrapContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: Colors.white,
        fontSize: 16
    },
    value: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700'
    }
})
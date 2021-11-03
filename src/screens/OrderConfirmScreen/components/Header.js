import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

export function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='close' size={25} style={{paddingTop: 10, color: Colors.white}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        display: 'flex',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: Colors.pink_fire,
        paddingBottom: 5
    }
})

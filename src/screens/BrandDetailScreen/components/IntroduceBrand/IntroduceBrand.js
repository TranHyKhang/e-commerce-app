import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity 
} from 'react-native'

import Colors from '../../../../utils/Colors'

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native'

export function IntroduceBrand({brandName, brandDescription}) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <View></View>
                <Text style={styles.brandName}>{brandName}</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={1}
                >
                    <AntDesign 
                        name='close' 
                        size={30} 
                        color={Colors.white}
                    />
                </TouchableOpacity>
                
            </View>
            <Text style={styles.brandDescription}>{brandDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },
    wrapHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    brandName: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: '700'
    },
    brandDescription: {
        color: Colors.introduce_content,
        paddingTop: 50,
        fontSize: 15,
        lineHeight: 25,
    }
})

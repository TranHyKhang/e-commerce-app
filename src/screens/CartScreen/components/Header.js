import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation, useRoute} from '@react-navigation/native';

//redux
import {useDispatch} from 'react-redux';
import {UnHideTabBar} from '../../../actions';
import Colors from '../../../utils/Colors';

export function Header() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Cart</Text>
            <TouchableOpacity 
                onPress={() => {
                    
                    if(route.name === "CartScreen") {
                        navigation.goBack();
                        dispatch(UnHideTabBar());
                    } else {
                        navigation.goBack();
                    }
                }}
                style={styles.headerIcon}
            >
                <AntDesign 
                    name='close' 
                    size={30}
                /> 
            </TouchableOpacity>
             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: Colors.sub_title_color
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '700'
    },
    headerIcon: {
        position: 'absolute',
        right: 20
    }
})

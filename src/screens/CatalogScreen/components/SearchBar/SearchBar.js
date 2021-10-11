import React from 'react';
import { 
    View, 
    Text,
    TextInput, 
    StyleSheet 
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../../../../utils/Colors'

export function SearchBar() {
    return (
        <View style={styles.container}>
            <AntDesign 
                name="search1" 
                size={20} 
                style={styles.searchIcon}
                color={Colors.sub_title_color}
            />
            <TextInput 
                style={styles.textInputStyle}
                placeholder='Brand, Models, Collectionm, ...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD',
        margin: 20,
        borderRadius: 10,
    },
    searchIcon: {
        padding: 10,
    },
    textInputStyle: {
        flex: 1,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        // paddingLeft: 0,
        backgroundColor: '#DDD',
        borderRadius: 20,
        color: '#424242',
    }
})
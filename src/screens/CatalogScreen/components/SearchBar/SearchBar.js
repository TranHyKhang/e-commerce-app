import React from 'react';
import { 
    View, 
    Text,
    TextInput, 
    StyleSheet 
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export function SearchBar() {
    return (
        <View style={styles.container}>
            <AntDesign 
                name="search1" 
                size={25} 
                style={styles.searchIcon}
            />
            <TextInput 
                style={styles.textInputStyle}
                placeholder='Brand, '
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        margin: 20,
        borderRadius: 20
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
        backgroundColor: '#eee',
        borderRadius: 20,
        color: '#424242',
    }
})
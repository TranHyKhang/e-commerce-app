import React from 'react'
import { 
    View, 
    Text,
    TextInput, 
    StyleSheet 
} from 'react-native'

export function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInputStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textInputStyle: {
        backgroundColor: '#eee'
    }
})
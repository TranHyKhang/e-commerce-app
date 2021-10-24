import React from 'react';
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../../utils/Colors';

//Component
import {Header} from './components';

export function CartScreen() {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white
    }
})

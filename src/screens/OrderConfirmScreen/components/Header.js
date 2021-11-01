import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../utils/Colors';

export function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
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

import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import Modal from 'react-native-modal';
import Colors from '../../../utils/Colors';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

export function ModelNotification({notification}) {
    return (
        <Modal 
            isVisible={true}
            statusBarTranslucent
            animationIn='slideInUp'
        >
            <View style={styles.container}>
                <View style={styles.wrapContent}>
                    <View style={[styles.wrapIcon, {borderColor: Colors.tab_button_focused_blue}]}>
                        <Entypo name='check' size={50} color={Colors.tab_button_focused_blue}/>   
                    </View>
                    <Text>{notification}</Text>
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    wrapContent: {
        width: width/1.2,
        height: height/2,
        backgroundColor: Colors.white,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapIcon: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 3
    }
})
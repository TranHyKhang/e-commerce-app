import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, Image
} from 'react-native';

import Colors from '../../../../utils/Colors';

import {useNavigation} from '@react-navigation/native'

import {DEFAULT_IMAGE_URL} from '../../../../utils/config';

import Antdesign from 'react-native-vector-icons/AntDesign'

import {useSelector} from 'react-redux';

export function HeaderDisplayInfo() {

    const user = useSelector(state => state.authReducer.user);

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.wrapHeaderFeature}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CartScreen')}
                > 
                    <Antdesign 
                        name="shoppingcart" 
                        size={30} 
                        color='white'
                        style={styles.iconfeature}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Antdesign 
                        name='setting' 
                        size={30} 
                        color='white'
                        style={styles.iconfeature}
                    />
                </TouchableOpacity>
                
            </View>
            <View style={styles.wrapUserDisplay}>
                {/* <Image/> */}
                <View style={styles.userImage}>
                    <Image 
                        source={{
                            uri: user.userImageUrl !== null ? user.userImageUrl : DEFAULT_IMAGE_URL
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 100
                        }}
                    />
                </View>
                <View style={styles.wrapUserInfo}>
                    <Text style={styles.userName}>{user.userName}</Text>
                    <View style={styles.wrapUserMemberCard}>
                        <Text style={styles.userMemberCard}>{'Member: ' + user.userMemberCard}</Text>
                    </View>
                    <View style={styles.wrapLikeCout}>
                        <Text style={styles.likeCountLabel}>Liked: </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background_gray,
        padding: 20,
        paddingBottom: 40,
        paddingTop: 40
    },
    wrapHeaderFeature: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconfeature: {
        marginLeft: 15
    },
    wrapUserDisplay: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapUserInfo: {
        marginLeft: 10
    },
    userName: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 3,
        paddingBottom: 3
    },
    userImage: {
        width: 80,
        height: 80,
        backgroundColor: 'gray',
        borderRadius: 100
    },
    wrapUserMemberCard: {
        padding: 1,
        backgroundColor: Colors.pink_fire,
        borderRadius: 8,
        paddingLeft: 10,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 3,
        paddingBottom: 3
    },
    userMemberCard: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '700'
    },
    wrapLikeCout: {
        paddingTop: 3,
        paddingBottom: 3
    },
    likeCountLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    likeCount: {

    }
})

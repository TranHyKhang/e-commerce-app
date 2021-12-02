import React, {useRef, useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    Image,
    Animated,
    Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../../../utils/Colors';

import {useNavigation} from '@react-navigation/native'

import {DEFAULT_IMAGE_URL} from '../../../../utils/config';

import Antdesign from 'react-native-vector-icons/AntDesign';

//Component
import {RenderSettingItem} from './components';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {
    HideTabBar,
    LogOut
} from '../../../../actions';

const {width} = Dimensions.get('screen');

export function HeaderDisplayInfo() {

    const user = useSelector(state => state.authReducer.user);
    const favoriteProducts = useSelector(state => state.productReducer.favoriteProducts);


    const navigation = useNavigation();
    const dispatch = useDispatch();

    //Animation
    const scrollX = new Animated.Value(0);
    const scrollClick = useRef(null);


    return (
        <Animated.View>
            <Animated.ScrollView
                ref={scrollClick}
                horizontal
                snapToInterval={width}
                scrollTo={{ x: scrollClick, animated: true }}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
                )}
            >
                <Animated.View style={{width: width}}>
                    <View style={styles.container}>
                        <View style={styles.wrapHeaderFeature}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('CartScreen');
                                    dispatch(HideTabBar());
                                }}
                            > 
                                <Antdesign 
                                    name="shoppingcart" 
                                    size={30} 
                                    color='white'
                                    style={styles.iconfeature}
                                />
                            </TouchableOpacity>
                            
                            {/* click to scroll the Animated.ScrollView */}
                            <TouchableOpacity 
                                // onPress={() => this.scroll.scrollTo({x: scrollClick, animated: true})}
                                // onPress={() => console.log(30)}
                            >
                                <Antdesign 
                                    name='setting' 
                                    size={30} 
                                    color='white'
                                    style={styles.iconfeature}
                                />
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.wrapUserDisplay}>
                            <View style={styles.userImage}>
                                <Image 
                                source={{
                                    uri: user !== null ? user.userImageUrl : DEFAULT_IMAGE_URL
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 100
                                }}/>
                            </View>
                            {
                                user !== null 
                                ?
                                <View style={styles.wrapUserInfo}>
                                    <Text style={styles.userName}>{user.userName}</Text>
                                    <View style={styles.wrapUserMemberCard}>
                                        <Text style={styles.userMemberCard}>{'Member: ' + user.userMemberCard}</Text>
                                    </View>
                                    <View style={styles.wrapLikeCout}>
                                        <Text style={styles.likeCountLabel}>{'Liked: ' + favoriteProducts.length }</Text>
                                    </View>
                                </View>
                                :
                                <View style={styles.wrapUserInfo}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('LoginScreen');
                                            dispatch(HideTabBar());
                                        }}
                                    >
                                        <Text 
                                            style={[styles.userName, {color: Colors.white, fontSize: 18}]}
                                        >
                                                Sign in / Sign up
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            
                        </View>
                    </View>
                </Animated.View>

                <Animated.View>
                    <View style={styles.wrapSetting}>
                        <View>
                            <RenderSettingItem 
                                lable='User info'
                                iconName='chevron-right'
                            />
                            <RenderSettingItem 
                                lable='About us'
                                iconName='chevron-right'
                        />
                        </View>
                        
                        <View>
                            <RenderSettingItem 
                                lable='Log out'
                                iconName='log-out'
                                _handleTouchEvent={() => dispatch(LogOut())}
                            />
                        </View>
                        
                    </View>
                </Animated.View>
            </Animated.ScrollView>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
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

    },
    wrapSetting: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1
    }   
})

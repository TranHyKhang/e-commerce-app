import React from 'react';
import { 
    View, 
    Text, 
    Button,
    Image, 
    StyleSheet,
    Dimensions, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';

import Colors from '../../utils/Colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

//Redux
import { 
    UnHideTabBar,
    AddToCart
} from '../../actions';

import {useDispatch} from 'react-redux';

//Component
import {CustomButton} from './components'

const {width,height} = Dimensions.get('screen');

export function ProductDetailScreen({route}) {

    const {item} = route.params;

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <View 
                style={{
                    backgroundColor: Colors.white, 
                    padding: 15
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                        dispatch(UnHideTabBar())
                    }}
                >
                    <AntDesign 
                        name='close' 
                        style={styles.closeIcon} 
                        size={30}
                    />
                </TouchableOpacity>
                

                <Image 
                    source={{uri: item.productImageUrl}}
                    style={styles.productImage}
                />

                <View style={styles.wrapContent}>

                    <View style={styles.wrapheaderContent}>
                        <View style={styles.wrapTitle}>
                            <Text style={styles.productBrandName}>{item.productBrandName}</Text>
                            <Text style={styles.productName}>{item.productName}</Text>
                        </View>

                        <AntDesign name='hearto' size={25}/>
                    </View>

                    <View>
                        <Text>
                            {item.productDescription}
                        </Text>
                    </View>

                </View>
            </View>

            <View style={styles.wrapPrice}>

                <Text
                    style={{
                        fontWeight: '900',
                        marginBottom: 10
                    }}
                >
                    BUY IN STORE
                </Text>

                <View style={[styles.wrapInfoStore, {justifyContent: 'space-between'}]}>

                    <View style={styles.wrapInfoStore}>
                        <View style={{width: 30, height: 30, backgroundColor: 'black', borderRadius: 100, marginRight: 10}}></View>
                        <Text style={styles.storeName}>StockK</Text>
                    </View>

                    <View 
                        style={[
                            styles.wrapInfoStore, 
                            {
                                borderWidth: 2,
                                padding: 5,
                                borderRadius: 5
                            }
                        ]}
                    >

                        <Text style={{marginRight: 5}}>Buy from:</Text>

                        <Text style={styles.priceStyle}>{'$' + item.productPrice}</Text>

                    </View>

                </View>
            </View>

            <CustomButton _handleEvent={() => dispatch(AddToCart(item._id))}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        display: 'flex',
    },
    closeIcon: {
        alignSelf: 'flex-end',
        padding: 10
    },
    productImage: {
        width: '100%',
        height: height/3
    },
    //productName, productBrandName, description, icon
    wrapContent: {

    },
    wrapheaderContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    wrapTitle: {

    },
    productBrandName: {
        fontSize: 20,
        fontWeight: '900',

    },
    productName: {
        color: '#000'
    },

    //price
    wrapPrice: {
        padding: 15,
        backgroundColor: Colors.white,
        marginTop: 10
    },
    wrapInfoStore: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeName: {
        fontWeight: '500'
    },
    priceStyle: {
        fontWeight:'800'
    }
    
})

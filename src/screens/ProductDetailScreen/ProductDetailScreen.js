import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Button,
    Image, 
    StyleSheet,
    Dimensions, 
    TouchableOpacity, 
    ScrollView, FlatList
} from 'react-native';

import Colors from '../../utils/Colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Modal from 'react-native-modal';

import {useNavigation} from '@react-navigation/native';

//Redux
import { 
    UnHideTabBar,
    AddToCart,
    AddFavoriteItem, 
    RemoveFavoriteItem,
} from '../../actions';

import {useDispatch, useSelector} from 'react-redux';

//Component
import {
    CustomButton,
    RenderSizeItem,
    ModalNotification
} from './components'

const {width,height} = Dimensions.get('screen');

export function ProductDetailScreen({route}) {

    const [size , setSize] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const {item} = route.params;

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const favoriteProducts = useSelector(state => state.productReducer.favoriteProducts);

    //Render icon heart like or dislike
    function renderFavoriteIcon(arr, item) {
        for(let x of arr) {
            if(x._id == item._id) {
                return true;
            }
        }
        return false;
    }

    return (
        <ScrollView style={styles.container}>
            <View 
                style={{
                    backgroundColor: '#fff', 
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

                        {
                            renderFavoriteIcon(favoriteProducts, item) 
                            ? 
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => dispatch(RemoveFavoriteItem(item))}
                            >
                                <AntDesign name='heart' size={25} color={Colors.pink_fire}/>
                            </TouchableOpacity> 
                            :
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => dispatch(AddFavoriteItem(item))}
                            >
                                <AntDesign name='hearto' size={25} />
                            </TouchableOpacity>
                        }
                    </View>

                    <View>
                        <Text style={{fontWeight: '600'}}>
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
                   SIZE
                </Text>
                <FlatList
                    
                    horizontal
                    data={item.productSizes}
                    renderItem={({item}) => <RenderSizeItem item={item} _handleTouchEvent={setSize} size={size}/>}
                />

            </View>

            <View 
                style={[
                    styles.wrapPrice,
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }
                ]}
            >

                <Text
                    style={{
                        fontWeight: '900',
                    }}
                >
                    BUY IN STORE
                </Text>

                <View style={[styles.wrapInfoStore, {justifyContent: 'space-between'}]}>

                   

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

                        <Text style={{marginRight: 5, fontWeight: '800'}}>Buy from:</Text>

                        <Text style={styles.priceStyle}>{'$' + item.productPrice}</Text>

                    </View>

                    

                </View>
                
            </View>

            <CustomButton _handleEvent={() => {
                dispatch(AddToCart(item._id, size));
                setIsVisible(true)
                console.log(item)
            }}/>

            <ModalNotification item={item} isVisible={isVisible} setIsVisible={setIsVisible}/>

            

            
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
        paddingRight: 0,
        paddingTop: 30

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
        color: '#000',
        fontWeight: '600'
    },

    //price
    wrapPrice: {
        padding: 15,
        backgroundColor: Colors.white,
        marginTop: 10,
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
    },
    
    //Modal
    modalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapModalContent: {
        width: 100,
        height: 100,
        backgroundColor: Colors.white
    }
})

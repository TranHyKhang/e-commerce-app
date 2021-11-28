import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../../../../../utils/Colors';

import {
    AddFavoriteItem, 
    RemoveFavoriteItem,
    HideTabBar
} from '../../../../../actions';

import {
    useSelector, 
    useDispatch
} from 'react-redux';

import {useNavigation} from '@react-navigation/native';



const {width} = Dimensions.get('screen');

export function RenderProductItem({item}) {

    const dispatch = useDispatch();

    const navigation = useNavigation();

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
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ProductDetailScreen', {item});
                dispatch(HideTabBar());
                // console.log(favoriteProducts)
            }}
        >
            <View style={styles.container}>
                {
                    renderFavoriteIcon(favoriteProducts, item) 
                    ? 
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => dispatch(RemoveFavoriteItem(item))}
                    >
                        <AntDesign name='heart' size={25} style={styles.heartIconStyle} color={Colors.pink_fire}/>
                    </TouchableOpacity> 
                    :
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => dispatch(AddFavoriteItem(item))}
                    >
                        <AntDesign name='hearto' size={25} style={styles.heartIconStyle}/>
                    </TouchableOpacity>
                }

                <Image 
                    source={{uri: item.productImageUrl}}
                    style={styles.productImage}
                />

                <Text style={styles.productName}>{item.productName}</Text>

                <Text 
                    style={styles.productDescription}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {item.productDescription.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/2,
        flex: 1/2,
        display: 'flex',
        padding: 15,
        borderWidth: 0.5,
        borderTopWidth: 0.7,
        borderColor: '#ccc'
    },
    heartIconStyle: {
        padding: 10,
        alignSelf: 'flex-end'
    },
    productImage: {
        width: 150,
        height: 100,
        alignSelf: 'center'
    },
    productName: {
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 20,
        paddingBottom: 5
    },
    productDescription: {
        color: Colors.sub_title_color,
        fontWeight: '600'
    }
})

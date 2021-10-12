import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'

import Colors from  '../../utils/Colors';

//components
import {
    IntroduceBrand, 
    RenderProductItem,
    RenderProducts
} from './components'

import {useSelector} from 'react-redux'

export function BrandDetailScreen({route}) {
    const {item} = route.params;
    const products = useSelector(state => state.productReducer.products);

    const productFiltered = products.filter(product => product.productBrandID == item._id)
    return (
        <ScrollView style={styles.container}>
            <IntroduceBrand 
                brandName={item.productBrand} 
                brandDescription={item.productBrandDescription}
            />
            <RenderProducts products={productFiltered}/>
            <View><Text>haha</Text></View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.background_gray,
        display: 'flex',
        // flex: 1
    }
})

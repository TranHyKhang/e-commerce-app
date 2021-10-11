import React, {useEffect} from 'react'
import {
    StatusBar, 
    StyleSheet,
    ScrollView, Button,
    View
} from 'react-native'

//Import redux hook
import {useDispatch, useSelector} from 'react-redux'

//Import Action 
import {getProducts} from '../../actions'

//Import component
import {
    WrapBannerAndCarousel,
    CatalogFeature,
    FamousProduct
} from './components';


const mockData = {
    productBrands: [
        {
            productBrand: 'On',
            productBrandDescription: `On was born in the Swiss alps with one goal: to
                                    revolutionize the sensation of running. It's all based on
                                    on radical idea. Soft landings followed by explosive
                                    take-offs. Or, as they call it, running on clouds.`,
            productBrandImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
            products: [
                {
                    productName: 'THE ROGER Clubhouse Limited Edition',
                    productBrandName: 'On',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: true,
                    productIsSpecialItem: false,
                    productPrice: 120
                },
                {
                    productName: 'THE ROGER Clubhouse Limited Edition',
                    productBrandName: 'On',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: false,
                    productIsSpecialItem: false,
                    productPrice: 120
                },
                {
                    productName: 'THE ROGER Clubhouse Limited Edition',
                    productBrandName: 'On',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: true,
                    productIsSpecialItem: false,
                    productPrice: 120
                },
            ]
        },
        {
            productBrand: 'Nike',
            productBrandDescription: `On was born in the Swiss alps with one goal: to
                                    revolutionize the sensation of running. It's all based on
                                    on radical idea. Soft landings followed by explosive
                                    take-offs. Or, as they call it, running on clouds.`,
            productBrandImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
            products: [
                {
                    productName: 'Nike Air Force',
                    productBrandName: 'Nike',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: true,
                    productIsSpecialItem: true,
                    productPrice: 120
                },
                {
                    productName: 'Nike Air Force',
                    productBrandName: 'Nike',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: true,
                    productIsSpecialItem: true,
                    productPrice: 120
                },
                {
                    productName: 'Nike Air Force',
                    productBrandName: 'Nike',
                    productDescription: `On's most expensive tennis-inspired sneaker. A bold, nostalgic
                                        look meets next-gen tech for all-day comfort`,
                    productImageUrl: 'https://res.cloudinary.com/tran-hy-khang/image/upload/v1588569608/avatarCodesX.jpg',
                    productIsHotItem: true,
                    productIsSpecialItem: true,
                    productPrice: 120
                },
            ]
        }
    ]
}

//Import LoadingScreen
import {LoadingScreen} from '../LoadingScreen'

export function HomeScreen() {

    const products = useSelector(state => state.productReducer.products);
    const brands = useSelector(state => state.productReducer.brands)
    const isLoading = useSelector(state => state.productReducer.isLoading);
    const specialproductProduct = products.filter(item => item.productIsSpecialItem == true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        isLoading ?
        <LoadingScreen/>
        :

        <ScrollView style={styles.container}>
            <StatusBar  barStyle='light-content' hidden/>
            <View style={{marginBottom: 20}}>
                <WrapBannerAndCarousel/>
                <CatalogFeature  productBrand={brands[0]}  additionName="RUNNING"/>
                <FamousProduct item={specialproductProduct[0]}/>
            </View>
            

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    }
})

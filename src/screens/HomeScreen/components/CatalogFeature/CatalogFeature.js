import React, {useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Image,
    Button 
} from 'react-native'

//Import colors from utils
import Colors from '../../../../utils/Colors';

//import redux hook
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen')

export function CatalogFeature({productBrand, additionName}) {

    const products = useSelector(state => state.productReducer.products);

    let productsFiltered = products.filter(item => item.productBrandID == productBrand._id)

    function DisplayRightColumn(listItem) {
        if(listItem.length < 3) {
            return (
                <View style={styles.renderOneItemInRight}>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: listItem[1].productImageUrl}}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.wrapfamousRightItem}>
                    <View style={styles.famousRightTopItem}>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: listItem[1].productImageUrl}}
                        />
                    </View>
                    <View style={styles.famousRightBottomItem}>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: listItem[2].productImageUrl}}
                        />
                    </View>
                </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapCatalogFamous}>
                <Text style={styles.famousItemTitle}>
                    {productBrand.productBrand.toUpperCase() + ' ' + additionName}
                </Text>
                <View style={styles.famousItemBanner}>
                    <Image 
                        style={{width: width, height: '100%'}}
                        source={{uri: productBrand.productBrandImageUrl}}/>
                </View>
                <View style={styles.wrapFamousItem}>
                    <View style={styles.famousLeftItem}>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: productsFiltered[0].productImageUrl}}
                        />
                    </View>
                    {
                        DisplayRightColumn(productsFiltered)
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        // marginBottom: 200
    },
    wrapCatalogFamous: {

    },
    famousItemTitle: {
        fontWeight: '900',
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 20
    },
    famousItemBanner: {
        width: width,
        height: height/4,
        backgroundColor: 'yellow'
    },
    wrapFamousItem: {
        display: 'flex',
        flexDirection: 'row'
    },
    famousLeftItem: {
        width: width/2,
        height: 200,
        backgroundColor: '#EEE',
        marginRight: 1,
        paddingBottom: '10%'
    },
    wrapfamousRightItem: {
        marginLeft: 1
    },
    famousRightTopItem: {
        width: width/2,
        height: 100,
        backgroundColor: '#eee',
        marginBottom: 1,
        paddingBottom: '10%'

    },
    famousRightBottomItem: {
        width: width/2,
        height: 100,
        backgroundColor: '#eee',
        marginTop: 1,
        paddingBottom: '10%'

    },
    imageStyle: {
        width: '100%',
        height: '100%',
        
    },
    renderOneItemInRight: {
        width: width/2, 
        height: 200,
        backgroundColor: '#eee',
        paddingBottom: '10%'

    }
})
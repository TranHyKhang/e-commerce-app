import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Image 
} from 'react-native'

//Import colors from utils
import Colors from '../../../../utils/Colors';

const {width, height} = Dimensions.get('screen')

export function CatalogFeature() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapCatalogFamous}>
                <Text style={styles.famousItemTitle}>
                    ON RUNNING
                </Text>
                <View style={styles.famousItemBanner}>
                    {/* <Image 
                        style={{width: width, height: '100%'}}
                        source={{uri: ''}}/> */}
                </View>
                <View style={styles.wrapFamousItem}>
                    <View style={styles.famousLeftItem}></View>
                    <View style={styles.wrapfamousRightItem}>
                        <View style={styles.famousRightTopItem}></View>
                        <View style={styles.famousRightBottomItem}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginBottom: 20
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
        backgroundColor: 'green',
        marginRight: 1
    },
    wrapfamousRightItem: {
        marginLeft: 1
    },
    famousRightTopItem: {
        width: width/2,
        height: 100,
        backgroundColor: 'pink',
        marginBottom: 1
    },
    famousRightBottomItem: {
        width: width/2,
        height: 100,
        backgroundColor: 'purple',
        marginTop: 1
    }
})
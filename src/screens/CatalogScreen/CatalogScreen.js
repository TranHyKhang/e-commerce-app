import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    FlatList,
    StatusBar
} from 'react-native';

//Import redux hook
import {useSelector} from 'react-redux';

//Import colors from utils
import Colors from '../../utils/Colors';

//Import components
import {SearchBar, RenderBrandItem} from './components';

export function CatalogScreen() {

    const brands = useSelector(state => state.productReducer.brands)

    return (
        <View style={styles.container}>
            {/* <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/> */}
            {/* <Button title="Haha" onPress={() => console.log(brands)}/> */}
            <SearchBar/>
            <View style={styles.wrapCatalogContent}>
                <Text
                    style={{
                        color: Colors.sub_title_color,
                        fontWeight: '500',
                        marginLeft: 20,
                        marginBottom: 10
                    }}
                >
                    BRANDS
                </Text>
                <FlatList
                    data={brands}
                    renderItem={({item}) => <RenderBrandItem item={item}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 30
    },
    wrapCatalogContent: {
        flex: 9.2
    }
})
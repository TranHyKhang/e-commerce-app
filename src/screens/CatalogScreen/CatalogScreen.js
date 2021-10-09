import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button
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
            {/* <Button title="Haha" onPress={() => console.log(brands)}/> */}
            <SearchBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.white
    }
})
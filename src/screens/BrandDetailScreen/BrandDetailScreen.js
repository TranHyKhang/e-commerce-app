import React from 'react';
import {
    StyleSheet, 
    ScrollView, 
    LogBox 
} from 'react-native';

import Colors from  '../../utils/Colors';

//components
import {
    IntroduceBrand, 
    RenderProducts
} from './components';

import {
    ScrollUpEvent,
    ScrollDownEvent
} from '../../actions';

import {
    useSelector, 
    useDispatch
} from 'react-redux';

//Ignore warning flatlist inside scroll view
LogBox.ignoreLogs([
    'VirtualizedLists should never be nested'
])

export function BrandDetailScreen({route}) {
    const {item} = route.params;
    const dispatch = useDispatch();

    //Get all product
    const products = useSelector(state => state.productReducer.products);
    
    //Select brand's collection
    const productFiltered = products.filter(product => product.productBrandID == item._id)

    /* 
    --------------------------------------------    
    Set the tab navigator hide when scroll down
    */
    let offSet = 0;

    function onScroll(event) {
        let currentOffSet = event.nativeEvent.contentOffset.y;
        let direction = currentOffSet > offSet ? 'down' : 'up';
        offSet = currentOffSet;
        if(direction == 'down') {
            dispatch(ScrollDownEvent())
        } else {
            dispatch(ScrollUpEvent())
        }
    }
    //-------------------------------------------

    return (
        <ScrollView style={styles.container} onScroll={onScroll}>
            <IntroduceBrand 
                brandName={item.productBrand} 
                brandDescription={item.productBrandDescription}
            />
            <RenderProducts products={productFiltered}/>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    }
})

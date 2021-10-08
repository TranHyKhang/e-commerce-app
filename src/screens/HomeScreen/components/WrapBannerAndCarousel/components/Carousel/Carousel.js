import React from 'react'
import { 
    View, 
    Text, 
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button 
} from 'react-native'

//Import Colors from utils
import Colors from '../../../../../../utils/Colors'

//Import redux hook
import {useSelector} from 'react-redux'

//Import Components
import {RenderCarouselItem} from '../../components'

export function Carousel() {
    const data = useSelector(state => state.productReducer.products);
    function ListHotItem(data) {
        let listHotItem = [];
        for(let item of data) {
            if(item.productIsHotItem) {
                listHotItem.push(item);
            }
        }
        return listHotItem;
    }
    return (
        <View style={styles.container}>
                <View style={styles.wrapTitleCarousel} >
                    <Text style={styles.titleCarousel}>
                        HIGHLIGHTED
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllTitle}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList 
                    data={ListHotItem(data)}
                    horizontal
                    renderItem={({item}) => <RenderCarouselItem item={item}/>}
                    // pagingEnabled={true}
                    // indicatorStyle='white'
                    showsHorizontalScrollIndicator={false}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 180,
        marginBottom: 20
    },
    wrapTitleCarousel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCarousel: {
        color: Colors.white,
        fontWeight: '900',
        fontSize: 18,
        paddingLeft: 10,
        paddingBottom: 10
    },
    seeAllTitle: {
        color: Colors.white,
        paddingRight: 10,
        fontSize: 14
    }
})

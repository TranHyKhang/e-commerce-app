import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions 
} from 'react-native';

import {
    useDispatch, 
    useSelector
} from 'react-redux';

import {
    TabToFavorite, 
    TabToTrackingOrder,
    getUserOrders
} from '../../../../actions';

import Colors from '../../../../utils/Colors'

const {width} = Dimensions.get('screen');

export function BodyTab() {
    
    const isTabLeft = useSelector(state => state.bodyTabReducer.isTabLeft);
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => dispatch(TabToFavorite())}
                activeOpacity={1}
            >
                <View 
                    style={[
                        styles.buttonStyle,
                        {
                            borderBottomWidth: isTabLeft ? 2 : 0,
                            borderColor: Colors.pink_fire,
                        }
                    ]}>
                    <Text style={[
                        styles.buttonTitle,
                        {
                            color: isTabLeft ? Colors.pink_fire : Colors.sub_title_color
                        }
                    ]}>
                        Favorites
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    dispatch(TabToTrackingOrder());
                    dispatch(getUserOrders(user._id));
                    // console.log(user)
                }}
                activeOpacity={1}
            >
                <View style={[
                        styles.buttonStyle,
                        {
                            borderBottomWidth: isTabLeft ? 0: 2,
                            borderColor: Colors.pink_fire
                        }
                    ]}>
                    <Text style={[
                        styles.buttonTitle,
                        {
                            color: isTabLeft ? Colors.sub_title_color : Colors.pink_fire
                        }
                    ]}>
                        Tracking Order
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    buttonStyle: {
        width: width/2,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontWeight: '700'
    }
})

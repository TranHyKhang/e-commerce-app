import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../utils/Colors';


const {width, height} = Dimensions.get('screen');

export function CustomButton({_handleEvent}) {
    return (
        <TouchableOpacity 
            activeOpacity={1}
            onPress={_handleEvent}
        >
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    // marginTop: 10,
                    backgroundColor: Colors.white,
                    paddingTop: 20,
                    paddingBottom: 20
                }}
            >
                <View style={styles.container}>
                    <Text
                        style={{
                            color: Colors.white,
                            fontWeight: '700'
                        }}
                    >
                        Add To Cart
                    </Text>
                </View>
            </View>
            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: width/1.1,
        backgroundColor: Colors.pink_fire,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10
    }
})

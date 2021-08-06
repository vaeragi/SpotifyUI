import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const TabButton = (props) => {
    return (
        <View style={styles.buttonView}>
            <TouchableOpacity 
            style={[styles.button,{backgroundColor:props.isFocused?'#1ED760':'transparent'}]}
                onPress={props.onPress}>
                <Image source={props.imageSource} style={styles.buttonImage}
                 resizeMode='cover' />
                <Text style={styles.buttonText}>{props.title.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabButton;

const styles = StyleSheet.create(
    {
        buttonView: {
            height: 46,
            width: 46
        },
        button: {
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 23
        },
        buttonImage: {
            height: 19, 
            width: 19
        },
        buttonText: {
            fontSize: 8
        },
        buttonSelected: {
            backgroundColor: '#1ED760'
        }
    }
)
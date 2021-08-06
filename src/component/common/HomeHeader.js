import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { SpotifyIcon, BroadCastIcon, SettingIcon } from '../../assets/index'

const {width} = Dimensions.get('window');
const HomeHeader = () => {
    return (
        <View style={styles.headerView}>
            <Image source={SpotifyIcon} style={{height:21, width:20}}/>
            <Text style={styles.text}>{'good morning nikhil!'.toUpperCase()}</Text>
            <TouchableOpacity><Image source={BroadCastIcon} style={{height:21, width:21, marginRight: 5}}/></TouchableOpacity>
            <TouchableOpacity><Image source={SettingIcon} style={{height:21, width:20}}/></TouchableOpacity>
            
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create(
    {
        headerView: {
            width: width,
            height:21,
            flexDirection:'row',
            paddingHorizontal:10,
            justifyContent:'space-around'
        },
        text: {
            letterSpacing:3,
            flex:1, 
            fontFamily:'Poppins-Bold'
        }
    }
)
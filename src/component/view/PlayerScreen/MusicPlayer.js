import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MusicArt, HeartSymbol, SpotifyIcon } from '../../../assets/index'

const { width } = Dimensions.get('window')

const MusicPlayer = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={MusicArt} style={{ width: width, height: 500, flex: 0.5 }}>
                <View style={{ flex: 0.5, alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 10, color: 'white' }}>PLAYING FROM ALBUM</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: 'white' }}>THE SEARCH</Text>
                </View>
            </ImageBackground>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', paddingTop: 30 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22 }}>WHEN I GROW UP</Text>
                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 12 }}>BY NF REAL MUSIC</Text>
                </View>
                <View style={{borderWidth:1}}>
                    <Image soure={SpotifyIcon} style={{ width: 30, height: 30, position:'absolute' }} resizeMode='cover' />
                </View>

            </View>
        </View>
    )
}

export default MusicPlayer;
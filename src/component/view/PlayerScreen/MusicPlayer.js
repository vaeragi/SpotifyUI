import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MusicArt, HeartSymbol, ShuffleButton, SpeakerIcon, SpotifyIcon, DownArrow, TripleDotVerticalLight, PlayButton2, ForwardButton, ShareButton, PlusButton } from '../../../assets/index';
import Slider from '@react-native-community/slider';

const { height, width } = Dimensions.get('window')

const MusicPlayer = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={MusicArt} style={{ width: width, height: height / 1.7, flex: 0.5 }}>
                <View style={{ flex: 0.1, flexDirection: 'row', paddingTop: 20 }}>
                    <View style={{ flex: 0.1, justifContent: 'center', alignItems: 'center' }}>
                        <Image source={DownArrow} style={{ width: 20, height: 20 }} />
                    </View>
                    <View style={{ flex: 0.9, alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 10, color: 'white' }}>PLAYING FROM ALBUM</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: 'white' }}>THE SEARCH</Text>
                    </View>
                    <View>
                        <Image source={TripleDotVerticalLight} style={{ width: 20, height: 20 }} />
                    </View>
                </View>

            </ImageBackground>
            <View style={{ flex: 0.5 }}>
                <View style={{ flex: 0.5 }}>
                    <View style={{ flex: 0.8, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22 }}>WHEN I GROW UP</Text>
                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 12 }}>BY NF REAL MUSIC</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex:0.3}}>
                    <Image source={HeartSymbol} style={{ height: 17, width: 20, marginRight: 2 }} />
                </View>
                <View style={{flex:0.2}}>
                    <View>
                        <Slider minimumTrackTintColor='black' thumbTintColor='black' />
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 18 }}>
                        <Text>01:40</Text>
                        <Text>05:20</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image source={ForwardButton} style={{ height: 40, width: 40, transform: [{ scaleX: -1 }], marginHorizontal: 10 }} />
                    </View>
                    <View>
                        <Image source={PlayButton2} style={{ height: 60, width: 60, marginHorizontal: 10 }} />
                    </View>
                    <View>
                        <Image source={ForwardButton} style={{ height: 40, width: 40, marginHorizontal: 10 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30, flex:0.2 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={SpeakerIcon} style={{ height: 17, width: 17, marginHorizontal: 5 }} />
                        <Text style={{ color: '#1ED760', fontFamily: 'Poppins-Light', fontSize: 12 }}>APP-HAZE</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={ShuffleButton} style={{ height: 17, width: 17, marginRight: 2 }} />
                        <Image source={PlusButton} style={{ height: 17, width: 17, marginHorizontal: 2 }} />
                        <Image source={ShareButton} style={{ height: 17, width: 17, marginLeft: 2, marginRight: 5 }} />

                    </View>
                </View>
            </View>
        </View>
    )
}

export default MusicPlayer;
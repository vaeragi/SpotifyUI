import React from 'react';
import { View, Text, ImageBackground, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BillieElishBackgroundImage, BackArrow, GreenTick, SearchIconLight } from '../../../assets/index'
import CustomArtistTab from './CustomArtistTab';
const { width, height } = Dimensions.get('window')

const ArtistContainer = () => {
    return (
        <View >
            <ImageBackground source={BillieElishBackgroundImage} style={{ width: width, height: height-260 }}>
                <View style={styles.headerContainer}>
                    <View style={{ flex: 0.08 }}>
                        <TouchableOpacity><Image source={BackArrow} style={styles.backArrow} /></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.85 }}>
                        <Text style={{ color: 'white' , paddingRight: 5}}>Billie Elish</Text>
                        <Image source={GreenTick} style={{ height: 15, width: 15 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 0.18 }}>
                        <View>
                            <Image source={SearchIconLight} style={{ height: 20, width: 20}} />
                        </View>
                        <View>
                            <View style={styles.dotContainer}>
                                <View style={styles.dot}>
                                </View>
                                <View style={styles.dot}>
                                </View>
                                <View style={styles.dot}>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'flex-end', paddingBottom:40}}>
                    <View>
                        <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 22 }}>BILLIE ELISH</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Light', fontSize: 12 }}>50,000,000 MONTHLY LISTENERS</Text>
                    </View>
                    <TouchableOpacity style={{width: 114, height:35, backgroundColor:'#1EDF60', justifyContent:'center', alignItems:'center', borderRadius:20}}>
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Light', fontSize: 12 }}>FOLLOW</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View fstyle={{flex:1, borderColor:'white', borderWidth: 2}}>
                <CustomArtistTab />
                </View>
        </View>
    )
}

export default ArtistContainer;

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'white',
        height: 4,
        width: 4,
        borderRadius: 2
    },
    dotContainer: {
        width: 30,
        height: 24,
        justifyContent: 'space-evenly'
    },
    backArrow: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    backgroundImage: {
        width: width,
        height: 500
    },
    headerContainer: {
        flexDirection: 'row',
        flex:0.1,
        height: 52,
        alignItems: 'center'
    }
});
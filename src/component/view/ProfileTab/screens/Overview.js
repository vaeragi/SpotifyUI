import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import ArtistList from '../../../common/ArtistList';
import Slider from '@react-native-community/slider';
import { ShuffleButton, PlayButton, HeartUnfilledDark, ForwardButton } from '../../../../assets/index'

const { height, width } = Dimensions.get('window');

const Overview = () => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center', flex: 0.25, paddingVertical: 10 }}>
                <View style={{ height: height / 6.5, width: width - 60, flexDirection: 'row', backgroundColor: '#E7E8EB', borderRadius: 10, elevation: 9, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg' }} style={{ width: 88, height: 88, borderRadius: 44 }} />
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 17, paddingLeft: 10 }}>'Till I Collapse</Text>
                        <Slider thumbTintColor='black' minimumTrackTintColor='black' style={{ width: 250 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 12 }}>01:30</Text>
                            <Text style={{ fontFamily: 'Poppins-Light', fontSize: 12 }}>05:02</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Image source={ShuffleButton} style={{ width: 15, height: 15 }} />
                            <View style={{flexDirection:'row'}}>
                                <Image source={ForwardButton} style={{ width: 17, height: 17, transform: [{ scaleX: -1 }], marginHorizontal:20 }} />
                                <Image source={PlayButton} style={{ width: 15, height: 15, marginRight:20 }} />
                                <Image source={ForwardButton} style={{ width: 17, height: 17, marginRight:20 }} />
                            </View>
                            <Image source={HeartUnfilledDark} style={{ width: 15, height: 15 }} />
                        </View>
                    </View>

                </View>

            </View>

            <View style={{ flex: 0.75, paddingVertical: 10 }}>
                <View style={{ height: 30 }}>
                    <Text style={styles.heading}>RECENTLY PLAYED</Text>
                </View>
                <View style={{ height: 160 }}>
                    <ArtistList />
                </View>
                <View style={{ height: 30 }}>
                    <Text style={styles.heading}>DISCOVER NEW MUSIC</Text>
                </View>
                <View style={{ height: 160 }}>
                    <ArtistList />
                </View>
            </View>
            <View style={{ height: 60 }}></View>

        </ScrollView>

    )
}

export default Overview;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1
        },
        headerView: {
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        bodyView: {
            flex: 0.9
        },
        heading: {
            paddingLeft: 22,
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            letterSpacing: 2
        }
    }
)
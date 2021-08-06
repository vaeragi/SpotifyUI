import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import HomeHeader from '../../common/HomeHeader';
import ArtistList from '../../common/ArtistList';


const ProfileContainer = () => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.headerView}>
                <HomeHeader />
            </View>
            <View style={styles.bodyView}>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 40 }}>
                    <View style={{flex:0.3,justifyContent:'center'}}>
                        <Image source={{ uri: 'https://wallpaperaccess.com/full/2213424.jpg' }} style={{height: 118, width: 118, borderRadius: 59, }} />
                    </View>
                    <View style={{ flex: 0.7,alignItems:'flex-start', justifyContent:'center', paddingLeft:30}}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', letterSpacing:1.5 }}>NIKHIL KUMAR</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Free Account</Text>
                            <TouchableOpacity style={{ paddingLeft: 10 }}><Text style={{ color: 'green' }}>Upgrade</Text></TouchableOpacity>
                        </View>
                        <Image source={{ uri: 'https://static.thenounproject.com/png/2137557-200.png' }} style={{ height: 20, width: 20 }} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', flex: 0.25 }}>
                    <View style={{ height: 113, width: 351, backgroundColor: '#E7E8EB', borderRadius: 10, elevation: 9, justifyContent: 'center', alignItems: 'center' }}>
                        <Text> Music Player </Text>
                    </View>
                </View>

                <View>
                    <View style={{ height: 30 }}>
                        <Text style={styles.heading}>RECENTLY PLAYED</Text>
                    </View>
                    <View style={{ height: 160 }}>
                        <ArtistList />
                    </View>
                </View>
                {/* <View>
                    <View style={{ height: 30 }}>
                        <Text style={styles.heading}>DISCOVER NEW MUSIC</Text>
                    </View>
                    <View style={{ height: 160 }}>
                        <PlayList />
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default ProfileContainer;

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
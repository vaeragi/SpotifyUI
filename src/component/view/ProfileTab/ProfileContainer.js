import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import HomeHeader from '../../common/HomeHeader';
import ArtistList from '../../common/ArtistList';
import ProfileTabBar from './ProfileTabBar';

const ProfileContainer = () => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.headerView}>
                <HomeHeader />
            </View>
            <View style={styles.bodyView}>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 40 }}>
                    <View style={{ flex: 0.3, justifyContent: 'center' }}>
                        <Image source={{ uri: 'https://wallpaperaccess.com/full/2213424.jpg' }} style={{ height: 118, width: 118, borderRadius: 59, }} />
                    </View>
                    <View style={{ flex: 0.7, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 30 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', letterSpacing: 1.5 }}>NIKHIL KUMAR</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Free Account</Text>
                            <TouchableOpacity style={{ paddingLeft: 10 }}><Text style={{ color: 'green' }}>Upgrade</Text></TouchableOpacity>
                        </View>
                        <Image source={{ uri: 'https://static.thenounproject.com/png/2137557-200.png' }} style={{ height: 20, width: 20 }} />
                    </View>
                </View>
                <View style={{flex:1}}>
                    <ProfileTabBar />
                </View>

            </View>
        </View>
    )
}

export default ProfileContainer;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            backgroundColor: 'white'
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
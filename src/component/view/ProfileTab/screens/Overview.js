import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ArtistList from '../../../common/ArtistList';

const {height, width} = Dimensions.get('window');

const Overview = () => {
    return (
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center', flex: 0.25, paddingVertical: 10 }}>
                <View style={{ height: height/6, width: width-70, backgroundColor: '#E7E8EB', borderRadius: 10, elevation: 9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Music Player </Text>
                </View>
            </View>

            <View style={{flex:0.75, paddingVertical:10}}>
                <View style={{ height: 30 }}>
                    <Text style={styles.heading}>RECENTLY PLAYED</Text>
                </View>
                <View style={{height: 160}}>
                    <ArtistList />
                </View>
                <View style={{ height: 30 }}>
                    <Text style={styles.heading}>DISCOVER NEW MUSIC</Text>
                </View>
                <View style={{height: 160}}>
                    <ArtistList />
                </View>
            </View>
           <View style={{height: 60}}></View>
            
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
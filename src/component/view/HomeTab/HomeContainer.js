import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import {SpotifyGreenIcon} from '../../../assets/index'
import HomeHeader from '../../common/HomeHeader';
import PlayList from '../../common/PlayList';
import ArtistList from '../../common/ArtistList';
import PlayedPastYearCard from './PlayedPastYearCard';


const HomeContainer = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.headerView}>
                <HomeHeader />
            </View>
            <View style={styles.bodyView}>
                <View style={{flex:1,paddingTop:15}}>
                    <Text style={styles.heading}>MY PLAYLISTS</Text>
                </View>
                <View style={{ height: 180, flex:1}}>
                    <PlayList />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonStyle, {paddingHorizontal:30}]}><Text style={styles.buttonTextStyle}>EXPLORE</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:'transparent', borderWidth:1, flexDirection:'row', alignItems:'center'}]}><Text style={[styles.buttonTextStyle,{color:'black', marginRight: 5}]}>UPGRADE TO PREMIUM</Text><Image source={SpotifyGreenIcon} style={{height:16, width:16}}></Image></TouchableOpacity>
                </View>
                <View style={{flex:1, height:30}}>
                    <Text style={styles.heading}>RECENTLY PLAYED</Text>
                </View>
                <View style={{ flex:1, height: 160 }}>
                    <ArtistList />
                </View>
                <View style={{flex:1, height: 40}}>
                    <Text style={styles.heading}>2020 wrapped</Text>
                </View>
                <View style={{ height: 165, alignItems:'center' }}>
                    <PlayedPastYearCard />
                </View>
                <View>
                    <Text style={styles.heading}>POPULAR</Text>
                </View>
                <View style={{paddingBottom:100}}>
                    <PlayList />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeContainer;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex:1,
            backgroundColor: '#FFFFFF',
            paddingVertical: 20
        },
        headerView: {
            alignItems:'center', 
            flex:0.1
        },
        bodyView: {
            flex:0.9
        },
        heading: {
            paddingLeft:22 ,
            fontFamily:'Poppins-Medium', 
            fontSize: 18,
            letterSpacing:2
        },
        buttonStyle: {
            backgroundColor:'#1ED760', 
            paddingHorizontal:20,
            paddingVertical:5,
            borderRadius:15, 
            justifyContent:'center'
        },
        buttonTextStyle: {
            color:'white',
            fontFamily:'Poppins-Light',
            letterSpacing:2, 
            fontSize:12,
            fontWeight:'normal'
        },
        buttonContainer: {
            flex:1,
            justifyContent:'space-evenly', 
            flexDirection:'row', 
            height:30, 
            marginBottom:15
        }
    }
)
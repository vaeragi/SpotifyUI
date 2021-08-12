import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import {SpotifyGreenIcon} from '../../../../assets/index'
import HomeHeader from '../../../common/HomeHeader';
import PlayList from '../../../common/PlayList';
import ArtistList from '../../../common/ArtistList';

const {width, height} = Dimensions.get('window');
const MadeForYou = () => {
    return(
        <View style={{flex:1, width:width}}>
            <ScrollView style={styles.mainContainer}>
            <View style={styles.bodyView}>
                <View style={{flex:1}}>
                    <Text style={styles.heading}>UNIQULY YOURS</Text>
                </View>
                <View style={{ flex:1, height: 160 }}>
                    <ArtistList />
                </View>
                <View style={{flex:1, height:30}}>
                    <Text style={styles.heading}>RECENTLY PLAYED</Text>
                </View>
                <View style={{ height: 180, flex:1}}>
                    <PlayList />
                </View>
                <View>
                    <Text style={styles.heading}>DISCOVER NEW MUSIC</Text>
                </View>
                <View style={{ flex:1, height: 160 }}>
                    <ArtistList />
                </View>
                <View style={{paddingBottom:100}}/>
            </View>
        </ScrollView>
        </View>
    )
}

export default MadeForYou;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex:1,
            backgroundColor: '#FFFFFF',
            paddingVertical: 20
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../../common/HomeHeader';
import CustomLibraryTabBar from './CustomLibraryTabBar';
import Pager from './Pager';
import { MadeForYou, LikedSongs, RecentlyPlayed, Albums } from './screens/index';


const screenRender = (id) => {
    switch(id) {
        case 0: return(
            <MadeForYou />
        ) ;
        case 1: return(
        <LikedSongs />);
            
        case 2: return(<RecentlyPlayed />);
 
        case 3: return(<Albums />);

    }
}

const LibraryContainer = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerView}>
                <HomeHeader />
            </View>
            <View style={styles.bodyView}>
                <View>
                    <Text style={{ paddingLeft:22,fontFamily: 'Poppins-Medium', fontSize: 22, letterSpacing: 4 }}>YOUR LIBRARY</Text>
                </View>
                <View style={{flex:1}}>
                    <CustomLibraryTabBar />
                    <View style={{flex:1}}>
                    {screenRender(2)}
                    
                    </View>
                    
                </View>
            </View>

        </View>
    )
}

export default LibraryContainer;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            
        },
        headerView: {
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        bodyView: {
            flex: 0.9
        }
    }
)
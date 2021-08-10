import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../../common/HomeHeader';
import CustomLibraryTabBar from './CustomLibraryTabBar';



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
            backgroundColor:'#FFFFFF'
            
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
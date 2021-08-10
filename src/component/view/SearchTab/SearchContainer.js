import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import HomeHeader from '../../common/HomeHeader';
import { SearchTabIcon } from '../../../assets/index'
import GenreList from './GenreList';


const SearchContainer = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerView}>
                <HomeHeader />
            </View>
            <View style={styles.bodyView}>
                <View>
                    <Text style={styles.headingText}>SEARCH</Text>
                </View>
                <View style={{alignItems: 'center' }}>
                    <View style={styles.searchBarView}>
                        <TextInput
                            style={{ height: 43, width: 279 }}
                            placeholder='Search...' />
                        <TouchableOpacity style={{ paddingRight: 10 }}><Image source={SearchTabIcon} style={{ width: 30, height: 30 }}></Image></TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex:1,margin:2, alignItems:'center'}}>
                    <GenreList />
                </View>
            </View>
        </View>
    )
}

export default SearchContainer;

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
        },
        headerView: {
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bodyView: {
            flex: 0.9,
        },
        headingText: {
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
            letterSpacing: 4,
            padding: 22
        },
        searchBarView: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 20,
            height: 43,
            width: 319,
        }
    }
)

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PublicPlaylistCard from '../../../common/PublicPlaylistCard';

const PublicPlaylist = () => {
    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
                    <PublicPlaylistCard title='Dark' creationDate= 'Created in DEC 2020'/>
                    <PublicPlaylistCard title='My Mix' creationDate= 'Created in SEPT 2019'/>
                    <PublicPlaylistCard title='EMINEM FAV' creationDate= 'Created in JAN 2021'/>
                    <PublicPlaylistCard title='EMINEM FAV' creationDate= 'Created in JAN 2021'/>
                    
        </ScrollView>
    )
}

export default PublicPlaylist;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems:'center', 
        paddingTop:10, 
        paddingBottom:90
    }
});

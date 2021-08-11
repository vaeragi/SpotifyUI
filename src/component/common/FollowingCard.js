import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const FollowingCard = (props) => {
    const {artistName, followers, imageUrl} = props.item;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.artistName}>{artistName}</Text>
                <Text style={styles.followersCount}>{followers} Followers</Text>
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>following</Text></TouchableOpacity>
        </View>
    )
}

export default FollowingCard;

const styles = StyleSheet.create({
    mainContainer: {
        height: 62,
        padding:2,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        marginVertical: 10
    },
    img: {
        height: 58,
        width: 58,
        borderRadius: 29
    },
    button: {
        height: 35,
        width: 105,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30,
        flex:0.25
    },
    buttonText: {
        textTransform:'uppercase',
        fontFamily:'Poppins-Light',
        fontSize: 10
        
    },
    artistName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    followersCount: {
        fontFamily: 'Poppins-Light',
        fontSize:10
    },
    imageContainer: {
        flex: 0.18
    },
    textContainer: {
        flex: 0.55
    }
});
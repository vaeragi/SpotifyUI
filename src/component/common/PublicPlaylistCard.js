import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PublicPlaylistCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: 'https://creativesfeed.com/wp-content/uploads/2018/08/Aleixos-by-Vinicius-Gut.jpg' }} style={styles.img} />
                <Image source={{ uri: 'https://static.billboard.com/files/media/Pitbull-Greatest-Hits-album-art-2017-billboard-1240-compressed.jpg' }} style={styles.img} />
                <Image source={{ uri: 'https://static.billboard.com/files/media/21-drake-more-life-album-art-2017-billboard-1240-compressed.jpg' }} style={styles.img} />
                <Image source={{ uri: 'https://static.billboard.com/files/media/06-taylor-swift-reputation-album-art-2017-billboard-1240-compressed.jpg' }} style={styles.img} />
                <Image source={{ uri: 'https://static.billboard.com/files/media/29-tyler-the-creator-flower-boy-album-art-2017-billboard-1240-compressed.jpg' }} style={styles.img} />

            </View>
            <View style={styles.textAndButtonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.creationDateText}>{props.creationDate}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PublicPlaylistCard;

const styles = StyleSheet.create({
    mainContainer: {
        width: 351,
        height: 132,
        borderRadius: 10,
        backgroundColor: '#E7E8EB',
        padding: 5,
        marginVertical: 10
    },
    imgContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    img: {
        width: 62,
        height: 62,
        borderWidth: 1,
        borderRadius: 31
    },
    textAndButtonContainer: {
        flex: 0.5,
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 12,
        paddingRight: 5
    },
    button: {
        width: 85,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#1ED760'
    },
    buttonText: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        textTransform: 'uppercase',
        color: 'white'
    },
    titleText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        textTransform:'uppercase'
    },
    creationDateText: {
        fontFamily: 'Poppins-Light', 
        fontSize: 12
    }
});
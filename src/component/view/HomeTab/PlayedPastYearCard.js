import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayedPastYearCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://i.pinimg.com/originals/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec.jpg' }} style={styles.cardImage1} />
                <Image source={{ uri: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg' }} style={styles.cardImage2} />
                <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg' }} style={styles.cardImage3} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.titleText}>SEE WHO YOU LISTENED TO IN 2020</Text>
                <Text style={styles.subtitleText}>Your top artists, songs and
                    podcasts of the year and more..</Text>
            </View>

        </View>
    )
}

export default PlayedPastYearCard;

const styles = StyleSheet.create(
    {
        container: {
            height: 146,
            width: 329,
            position: 'absolute',
            backgroundColor: '#E7E8EB',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius:10,
            alignItems:'center',
            elevation:10
        },
        titleText: {
            marginTop:8, 
            flex:0.5, 
            fontFamily: 'Poppins-Bold', 
            fontSize: 14, 
            alignItems:'center', 
            justifyContent:'center' 
        },
        subtitleText: {
            flex:0.5, 
            fontFamily: 'Poppins-Light', 
            fontSize: 10, 
            alignItems:'center', 
            justifyContent:'center'
        },
        imageContainer: {
            flex: 1, 
            flexDirection: 'row', 
            height: 133, 
            marginHorizontal: 10
        },
        cardImage1: {
            width: 80, 
            height: 133, 
            position: 'absolute', 
            zIndex: 30, 
            borderRadius: 10
        },
        cardImage2: {
            paddingLeft: 20, 
            width: 100, 
            height: 133, 
            position: 'absolute', 
            zIndex: 20, 
            borderRadius: 10 
        },
        cardImage3: {
            width: 120, 
            height: 133, 
            position: 'absolute', 
            zIndex: 10, 
            borderRadius: 10 
        }
    }
)


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GenreCard = (props) => {

    const { genreName } = props.item;
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.genreName}>{genreName.toUpperCase()}</Text>
                <Text style={styles.genreDescription}>Top hip hop artists, albums,songs and more...</Text>
            </View>
            <View style={styles.imageContainer}>
                <View>
                    <Image source={{ uri: 'https://i.pinimg.com/originals/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec.jpg' }} style={styles.cardImage1} />
                    <Image source={{ uri: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg' }} style={styles.cardImage2} />
                    <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg' }} style={styles.cardImage3} />
                </View>
            </View>
        </View>
    )
}

export default GenreCard;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            height: 124,
            width: 319,
            backgroundColor: '#E7E8EB',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: 10,
            alignItems: 'center',
            elevation: 10,
            marginVertical: 10
        },
        cardImage1: {
            width: 80,
            height: 111,
            // position: 'absolute', 
            zIndex: 30,
            borderRadius: 10,
        },
        cardImage2: {
            width: 100,
            height: 111,
            position: 'absolute',
            zIndex: 20,
            borderRadius: 10
        },
        cardImage3: {
            width: 120,
            height: 111,
            position: 'absolute',
            zIndex: 10,
            borderRadius: 10
        },
        genreName: {
            flex: 0.5,
            paddingLeft: 10,
            fontFamily: 'Poppins-Bold',
            fontSize: 22,
            alignItems: 'center',
            justifyContent: 'center'
        },
        genreDescription: {
            flex: 0.5,
            paddingLeft: 10,
            fontFamily: 'Poppins-Light',
            fontSize: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textContainer: {
            flex: 0.5,
            paddingVertical: 25,
           
        },
        imageContainer: {
            flex: 0.5,
            flexDirection: 'row',
            justifyContent:'center',
            paddingRight:30
        }
    }
)

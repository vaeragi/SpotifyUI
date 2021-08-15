import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArtistCard = (props) => {
    const { artistName, imageUrl } = props.item;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.imageStyle} />
            </View>
            <Text style={styles.textStyle}>{artistName.toUpperCase()}</Text>
        </View>
    )
}

export default ArtistCard;

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
            height: 120,
            marginHorizontal: 5,
        },
        textStyle: {
            fontFamily: 'Poppins-Light',
            fontSize: 12
        },
        imageContainer: {
            width: 118,
            height: 118,
            borderRadius: 59,
            elevation: 10,
            marginBottom: 10
        },
        imageStyle: {
            width: 118,
            height: 118,
            borderRadius: 59
        }
    }
)
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const PLaylistCard = (props) => {
    const { title, subtitle, imageUrl } = props.item;
    console.log(title, 'Title')
    console.log(subtitle, 'SubTitle')
    console.log(imageUrl, 'URLs')
    return (
        <View style={styles.cardView}>
            <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.cardContainer}
            imageStyle={styles.image} >
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.title}>{title}</Text>
        </ImageBackground>
        </View>
        
    )
}

export default PLaylistCard;

const styles = StyleSheet.create(
    {
        cardContainer: {
            height: 145,
            width: 128,
            flex: 1,
            flexDirection: 'column-reverse',
            marginHorizontal: 5,
            
        },
        subtitle: {
            color: 'white',
            fontFamily: 'Poppins-Regular',
            fontSize: 10,
            paddingLeft: 5
        },
        title: {
            color: 'white',
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            paddingLeft: 5
        },
        cardView: {
            marginHorizontal:5,
            height: 144, 
            width: 127, 
            borderRadius: 10,
            elevation: 10,
        },
        image: {
            borderRadius: 10
        }
    }
)
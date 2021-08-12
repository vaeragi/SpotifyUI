import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';

const DATA = [
    {
        id:1,
        imageUrl: {uri:'https://i.pinimg.com/originals/21/0f/0b/210f0b6d10a322f32e3f985d9d864324.jpg'}
    },
    {
        id:2,
        imageUrl: {uri:'https://celebmafia.com/wp-content/uploads/2019/06/billie-eilish-vogue-australia-july-2019-7.jpg'}
    },
    {
        id:3,
        imageUrl: {uri:'https://www.theplace2.ru/archive/billie_eilish/img/billie-eilish-in-ell(2).jpg'}
    },
    {
        id:4,
        imageUrl: {uri:'https://wallpapersflix.com/us/wp-content/uploads/2020/07/Billie-Eilish-Picture.jpg'}
    },
    {
        id:5,
        imageUrl: {uri:'https://pbs.twimg.com/media/EL2djWGWwAEnbpz.jpg'}
    }
]

const Gallery = () => {

    const renderItem = ({item}) => {
        return(
            <View style={{marginHorizontal:5}}>
                <TouchableOpacity>
                <Image source={item.imageUrl} style={{height: 150, width:120, borderRadius: 15}}/>
                </TouchableOpacity>
                
            </View>
        )
    }

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:5, paddingBottom:5}}>
                <Text>Recent Photoshoot</Text>
                <TouchableOpacity style={{ paddingRight: 15 }}><Text style={styles.headerText}>Explore</Text></TouchableOpacity>
            </View>
            <View>
                <FlatList 
                    data = {DATA}
                    renderItem = {(item)=>renderItem(item)} 
                    keyExtractor = {item=>item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
    )
}

export default Gallery;

const styles = StyleSheet.create({
    headerText: {
        color: '#1ED760',
        textDecorationLine: 'underline'
    }
});
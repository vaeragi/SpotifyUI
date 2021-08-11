import React from 'react';
import { View, FlatList } from 'react-native';
import FollowingCard from '../../../common/FollowingCard';

const DATA = [
    {
        id:1,
        artistName: 'Justin Beiber',
        followers: '20,20,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    },
    {
        id:2,
        artistName: 'kendrick lamar',
        followers: '20,20,000',
        imageUrl: {uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSusoQHrrN1QD_DMEYP5yYn1bBI-oj7rnnA7WeK7429w1NyCeYV'}
    },
    {
        id:3,
        artistName: 'eminem',
        followers: '230,00,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    },
    {
        id:4,
        artistName: 'selena gomez',
        followers: '230,00,000',
        imageUrl: {uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg'}
    },
    {
        id:5,
        artistName: 'eminem',
        followers: '230,00,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    },
    {
        id:1,
        artistName: 'Justin Beiber',
        followers: '20,20,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    },
    {
        id:2,
        artistName: 'kendrick lamar',
        followers: '20,20,000',
        imageUrl: {uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSusoQHrrN1QD_DMEYP5yYn1bBI-oj7rnnA7WeK7429w1NyCeYV'}
    },
    {
        id:3,
        artistName: 'eminem',
        followers: '230,00,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    },
    {
        id:4,
        artistName: 'selena gomez',
        followers: '230,00,000',
        imageUrl: {uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg'}
    },
    {
        id:5,
        artistName: 'eminem',
        followers: '230,00,000',
        imageUrl: {uri: 'https://besttoppers.com/wp-content/uploads/2017/11/Justin-Bieber-Top-Popular-Singers-in-2018.jpg'}
    }
]

const Following = () => {
    return (
        <View>
            <FlatList 
                data= {DATA}
                renderItem = {(item)=> <FollowingCard {...item} />}
                keyExtractor = {item => item.id} 
                contentContainerStyle={{paddingBottom:70}}/>
        </View>
    )
}

export default Following;


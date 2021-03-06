import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import GenreCard from './GenreCard';

const {width} = Dimensions.get('window');

const DATA = [
    {
        id:1,
        genreName: 'hip hop'
    },
    {
        id:2,
        genreName: 'rock'
    },
    {
        id:3,
        genreName: 'instrumental'
    },
    {
        id:4,
        genreName: 'jazz'
    },
    {
        id:5,
        genreName: 'pop'
    }
]

const GenreList = () => {
    return(
        <View style={{flex:1}}>
            <FlatList 
                data={DATA}
                renderItem={(item)=> {
                    return(
                        <GenreCard {...item} />
                    )
                }}
                keyExtractor={item=> item.id}
                contentContainerStyle={{alignItems:'center',paddingBottom:70}}
                style={{width:width}}
                showsVerticalScrollIndicator={false}/>
        </View>
            
    )
}

export default GenreList;
import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import GenreCard from './GenreCard';

const {height, width} = Dimensions.get('window');

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
            <FlatList 
                data={DATA}
                renderItem={(item)=> {
                    return(
                        <GenreCard {...item} />
                    )
                }}
                keyExtractor={item=> item.id}
                contentContainerStyle={{justifyContent:'center'}}
                />
    )
}

export default GenreList;
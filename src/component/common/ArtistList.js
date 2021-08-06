import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ArtistCard from './ArtistCard';

const DATA = [
    {
        id:1,
        artistName:'Taylor Swift',
        imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg'
    },
    {
        id:2,
        artistName:'Eminem',
        imageUrl: 'https://static.billboard.com/files/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998-compressed.jpg'
    },
    {
        id:3,
        artistName:'Kendrick Lamar',
        imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg'
    },
    {
        id:4,
        artistName:'Justin Beiber',
        imageUrl: 'https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg'
    },
    {
        id:5,
        artistName:'Billie Ellish',
        imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Billie-Eilish_1200x768.jpeg'
    }
]

const ArtistList = () => {
    return(
        <View>
            <FlatList 
                data={DATA}
                renderItem={(item)=> <ArtistCard {...item} />} 
                keyExtractor={item=>item.id}
                horizontal={true} 
                style={{height:150}}
                contentContainerStyle={{alignItems:'center'}}
                showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default ArtistList;
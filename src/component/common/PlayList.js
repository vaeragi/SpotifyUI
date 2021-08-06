import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import PLaylistCard from './PlaylistCard';

const {height, width} = Dimensions.get('window')

const DATA = [
    {
        id:1,
        imageUrl: 'https://i.pinimg.com/originals/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec.jpg',
        title: 'DARK',
        subtitle: 'Created 2009'
    },
    {
        id:2,
        imageUrl: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg',
        title: 'MY MIX 2021',
        subtitle: 'Created 2009'
    },
    {
        id:3,
        imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg',
        title: 'LAMAR',
        subtitle: 'Created 2009'
    },
    {
        id:4,
        imageUrl: 'https://i.pinimg.com/originals/7c/7e/cc/7c7ecc05d6ff3e2130d364fa782efe84.png',
        title: 'EMINEM',
        subtitle: 'Created 2009'
    },
]

const PlayList = () => {
    return(
        <View>
            <FlatList
                data={DATA}
                renderItem={(item)=>{
                    {console.log(item,'##item')}
                    return(
                        <PLaylistCard {...item} />
                    )
                }}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                style={{height: 170, width: width}}
                contentContainerStyle={{alignItems:'center'}}
                />
        </View>
    )
}

export default PlayList;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { PlayButton, TripleDotHorizontalLight, HeartUnfilledDark, ShareButton, PlusButton } from '../../../../assets/index'

const { height, width } = Dimensions.get('window')


const DATA = [
    {
        id: 1,
        songName: '!!!!',
        numberOfPlays: '452315464',
        imageUrl: { uri: 'https://i1.wp.com/filmmusicdaily.com/wp-content/uploads/2018/08/legion-season-2-covers-album_600.jpg' }
    },
    {
        id: 2,
        songName: 'bad guy',
        numberOfPlays: '154651431',
        imageUrl: { uri: 'https://pbs.twimg.com/profile_images/686983344274280456/CKUGjcnG_400x400.png' }
    },
    {
        id: 3,
        songName: 'you should see me in the crown',
        numberOfPlays: '235315464',
        imageUrl: { uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119748022/original/11578a69d884d4ce48149c908bb49b46baf3126f/design-original-covers-art-for-your-mixtape-or-song.png' }
    },
    {
        id: 4,
        songName: 'wish you were gay',
        numberOfPlays: '422353244',
        imageUrl: { uri: 'https://www.mixtapepsds.com/wp-content/uploads/2019/08/Mixtape-Cover-Template-Dirty-Money.png' }
    },
    {
        id: 5,
        songName: 'my strange addiction',
        numberOfPlays: '121510213',
        imageUrl: { uri: 'https://i.scdn.co/image/ab67706c0000bebbc58636fc206c772c64a7e56c' }
    },
    {
        id: 1,
        songName: '!!!!',
        numberOfPlays: '452315464',
        imageUrl: { uri: 'https://i1.wp.com/filmmusicdaily.com/wp-content/uploads/2018/08/legion-season-2-covers-album_600.jpg' }
    },
    {
        id: 2,
        songName: 'bad guy',
        numberOfPlays: '15465131',
        imageUrl: { uri: 'https://pbs.twimg.com/profile_images/686983344274280456/CKUGjcnG_400x400.png' }
    },
    {
        id: 3,
        songName: 'you should see me in the crown',
        numberOfPlays: '235315464',
        imageUrl: { uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119748022/original/11578a69d884d4ce48149c908bb49b46baf3126f/design-original-covers-art-for-your-mixtape-or-song.png' }
    },
    {
        id: 4,
        songName: 'wish you were gay',
        numberOfPlays: '422353244',
        imageUrl: { uri: 'https://www.mixtapepsds.com/wp-content/uploads/2019/08/Mixtape-Cover-Template-Dirty-Money.png' }
    },
    {
        id: 5,
        songName: 'my strange addiction',
        numberOfPlays: '121510213',
        imageUrl: { uri: 'https://i.scdn.co/image/ab67706c0000bebbc58636fc206c772c64a7e56c' }
    }
]


const Albums = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10, alignItems: 'center', paddingHorizontal: 10, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                <View style={{ flex: 0.1 }}>
                    <Image source={item.imageUrl} style={{ width: 30, height: 30, borderRadius: 15 }} />
                </View>
                <View style={{ flex: 0.05 }}>
                    <Image source={PlayButton} style={{ width: 12, height: 12 }} />
                </View>
                <View style={{ flex: 0.56 }}>
                    <Text style={styles.songTitle}>{item.songName}</Text>
                </View>

                <View style={{ flex: 0.08 }}>
                    <Image source={HeartUnfilledDark} style={{ width: 16, height: 16 }} />
                </View>
                <View style={{ flex: 0.08 }}>
                    <Image source={PlusButton} style={{ width: 16, height: 16 }} />
                </View>
                <View style={{ flex: 0.08 }}>
                    <Image source={ShareButton} style={{ width: 16, height: 16 }} />
                </View>
                <View style={{ flex: 0.05 }}>
                    <Image source={TripleDotHorizontalLight} style={{ width: 16, height: 16 }} />
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:0.85}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 18}}>WHEN WE ALL FALL ASLEEP
                            WHERE DO WE GO?</Text>
                    </View>
                    <View style={{flex:0.075}}>
                        <Image source={HeartUnfilledDark} style={{ width: 16, height: 16 }} />
                    </View>
                    <View style={{ flex: 0.1 }}>
                        <Image source={TripleDotHorizontalLight} style={{ width: 16, height: 16 }} />
                    </View>

                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:width, paddingLeft: 10}}>
                    <View>
                        <Text>2019</Text>
                    </View>
                    
                    <TouchableOpacity style={{ paddingRight: 15 }}><Text style={styles.headerText}>Play Album</Text></TouchableOpacity>
                </View>

            </View>
            <View>
                <FlatList
                    style={{ height: 170 }}
                    data={DATA}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )

}

export default Albums;

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'flex-end',
        height: 40
    },
    headerText: {
        color: '#1ED760',
        textDecorationLine: 'underline'
    },
    songTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        textTransform: 'capitalize'
    },
    playCount: {
        fontFamily: 'Poppins-Light',
        fontSize: 10
    }
});
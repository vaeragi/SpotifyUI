import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { MadeForYou, LikedSongs, RecentlyPlayed, Albums } from './screens/index';
import Pager from './Pager';

const Screeens = [
    {
        id:1,
        tabName: 'Made For You',
        tabScreen: MadeForYou
    },
    {
        id:2,
        tabName: 'Recently Played',
        tabScreen: RecentlyPlayed
    },
    {
        id:3,
        tabName: 'Liked Songs',
        tabScreen: LikedSongs
    },
    {
        id:4,
        tabName: 'Albums',
        tabScreen: Albums
    }
];



const CustomLibraryTabBar = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const renderItem = (item) => {
        return(
            <View>
                <TouchableOpacity 
                    style={[styles.button,{borderBottomWidth:activeTab==item.id?2:0}]}
                    onPress={()=>setActiveTab(item.id)}>
                    <Text>{item.tabName}</Text>
                </TouchableOpacity>
            </View>
        )
    }



    return(
        <View>
            <FlatList 
                horizontal={true}
                data={Screeens}
                renderItem={({item, index})=>renderItem(item)}
                keyExtractor={item=>item.id}
                showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

// const CustomLibraryTabBar = (props) => {
//     let {index}=props.navigationState;
//     console.log("props##################",props);
//     return(
//         <ScrollView horizontal={true}>
//         <View style={{flex:1,flexDirection:'row'}}>
//             <TouchableOpacity 
//                 onPress={()=>props.jumpTo('madeforyou')}
//                 style={[styles.button,{borderBottomWidth:index ==0 ?1:0}]}>
//                 <Text>Made For You</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>props.jumpTo('recentlyplayed')} 
//                 style={[styles.button,{borderBottomWidth:index ==1 ?1:0}]}>
//                 <Text>Recently Played</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>props.jumpTo('likedsongs')} 
//                 style={[styles.button,{borderBottomWidth:index ==2?1:0}]}>
//                 <Text>Liked Songs</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//                 style={[styles.button,{borderBottomWidth:index ==3?1:0}]}
//                 onPress={()=>props.jumpTo('albums')}>
//                 <Text>Album</Text>
//             </TouchableOpacity>
//         </View>
//         </ScrollView>
//     )
// }

export default CustomLibraryTabBar;

const styles = StyleSheet.create(
    {
        button: {
            height: 50,
            backgroundColor:'white',
            paddingHorizontal:20,
            justifyContent:'center',
            alignItems:'center'
        }
    }
)
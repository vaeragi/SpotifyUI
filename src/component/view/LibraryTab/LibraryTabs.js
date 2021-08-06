import React from 'react';
import {View, useWindowDimensions, Text,Dimensions} from 'react-native';
import { Albums, LikedSongs, MadeForYou, RecentlyPlayed } from './screens/index';
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomLibraryTabBar from './CustomLibraryTabBar';


// const renderScene = SceneMap(
//   {
//     madeforyou: MadeForYou,
//     recentlyplayed: RecentlyPlayed,
//     likedsongs: LikedSongs,
//     albums: Albums
//   }
// )

// const LibraryTabs = () => {
//   const layout = useWindowDimensions();
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState(
//     [
//       { key: 'madeforyou', title: 'Made For You' },
//       { key: 'recentlyplayed', title: 'Recently Played' },
//       { key: 'likedsongs', title: 'Liked Songs' },
//       { key: 'albums', title: 'Albums' }
//     ]
//   )

//   return (
//     <View style={{flex:1,flexDirection:'row'}}>
//       <TabView
//       sceneContainerStyle={{width:layout.width}}
//       swipeEnabled={false}
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       //initialLayout={{ width: layout.width }}
//       renderTabBar={props => CustomLibraryTabBar(props)}
//     />
//     </View>
    
//   )
// }
export default LibraryTabs
import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { MadeForYou, LikedSongs, RecentlyPlayed, Albums } from './screens/index';

const {width, height} = Dimensions.get('window');

const Screeens = [
    {
        id:1,
        tabName: 'Made For You',
    },
    {
        id:2,
        tabName: 'Recently Played',
    },
    {
        id:3,
        tabName: 'Liked Songs',
    },
    {
        id:4,
        tabName: 'Albums',
    }
];

const screenRender = (id) => {
    switch(id) {
        case 0: return(<MadeForYou />) ;
        case 1: return(<RecentlyPlayed />);
        case 2: return(<LikedSongs />);
        case 3: return(<Albums />);
    }
}


const CustomLibraryTabBar = (props) => {
    const [activeTab, setActiveTab] = useState(1);
    const renderItem = (item) => {
        return(
            <View>
                <TouchableOpacity 
                    style={[styles.button]}
                    onPress={()=>setActiveTab(item.id)}>
                    <Text style={[styles.button,{fontWeight:activeTab==item.id?'bold':'normal',borderBottomWidth:activeTab==item.id?2:0}]}>{item.tabName}</Text>
                </TouchableOpacity>
            </View>
        )
    }



    return(
        <View>
            <FlatList 
                horizontal={true}
                data={Screeens}
                renderItem={({item, index})=>renderItem(item,index)}
                keyExtractor={item=>item.id}
                showsHorizontalScrollIndicator={false}
                />
            <View style={{height: height-height/5.5}}>  
            {screenRender(activeTab-1)}
            </View>
        </View>
    )
}


export default CustomLibraryTabBar;

const styles = StyleSheet.create(
    {
        button: {
            height: 30,
            backgroundColor:'white',
            paddingHorizontal:10,
            justifyContent:'center',
            alignItems:'center',
            
        }
    }
)
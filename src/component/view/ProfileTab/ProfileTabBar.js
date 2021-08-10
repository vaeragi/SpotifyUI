import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import {Overview, PublicPlaylist, Followers, Following} from './screens/index';

const Screeens = [
    {
        id:1,
        tabName: 'Overview',
    },
    {
        id:2,
        tabName: 'Public Playlist',
    },
    {
        id:3,
        tabName: 'Following',
    },
    {
        id:4,
        tabName: 'Followers',
    }
];

const screenRender = (id) => {
    switch(id) {
        case 0: return(<Overview />) ;
        case 1: return(<PublicPlaylist />);
        case 2: return(<Following />);
        case 3: return(<Followers />);
    }
}


const ProfileTabBar = (props) => {
    const [activeTab, setActiveTab] = useState(0);
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
                showsHorizontalScrollIndicator={false}/>
            <View style={{height: 500}}>  
            {screenRender(activeTab-1)}
            </View>
        </View>
    )
}


export default ProfileTabBar;

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
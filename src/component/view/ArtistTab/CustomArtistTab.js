import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { About, MostPopular, Albums, Gallery, Merch } from './screens';

const {width, height} = Dimensions.get('window');

const Screeens = [
    {
        id:1,
        tabName: 'Most Popular',
    },
    {
        id:2,
        tabName: 'Albums',
    },
    {
        id:3,
        tabName: 'Gallery',
    },
    {
        id:4,
        tabName: 'Merch',
    },
    {
        id:5,
        tabName: 'About',
    }
];

const screenRender = (id) => {
    switch(id) {
        case 0: return(<MostPopular />) ;
        case 1: return(<Albums />);
        case 2: return(<Gallery />);
        case 3: return(<Merch />);
        case 4: return(<About />);
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
                    <Text style={[styles.buttonText,{fontWeight:activeTab==item.id?'bold':'normal',borderBottomWidth:activeTab==item.id?2:0}]}>{item.tabName}</Text>
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
            height: 40,
            backgroundColor:'transparent',
            paddingHorizontal:25,
            justifyContent:'center',
            alignItems:'center',
            
        },
        buttonText: {
            fontFamily:'Poppins-Light',
            fontSize: 12,
            paddingBottom: 10
        }
    }
)
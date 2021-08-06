import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { HomeTabIcon, LibraryTabIcon, SearchTabIcon, ProfileTabIcon } from '../../assets/index'
import TabButton from './TabButton';
const {height, width} = Dimensions.get('window');

const CustomTab = (props) => {
    let {navigation,state} = props;
    return(
        <View style={styles.tabContainer}>
            <TabButton title='Home' isFocused={state.index === 0} imageSource={HomeTabIcon} onPress={()=>navigation.navigate('HomeTab')} />
            <TabButton title='Search' isFocused={state.index === 1} imageSource={SearchTabIcon} onPress={()=>navigation.navigate('SearchTab')} />
            <TabButton title='Library' isFocused={state.index === 2} imageSource={LibraryTabIcon} onPress={()=>navigation.navigate('LibraryTab')}/>
            <TabButton title='Profile' isFocused={state.index === 3} imageSource={ProfileTabIcon} onPress={()=>navigation.navigate('ProfileTab')}/>
        </View> 
    )
    

}

const styles = StyleSheet.create(
    {
        tabContainer : {
            marginTop: height-80,
            marginHorizontal: (width-320)/2,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width: 320,
            height: 60,
            position:'absolute',
            borderRadius:30,
            backgroundColor:'#E7E8EB',
            elevation: 5
        }
    }
    
)

export default CustomTab;
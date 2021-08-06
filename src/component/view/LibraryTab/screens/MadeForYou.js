import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import HomeContainer from '../../HomeTab/HomeContainer';

const {width, height} = Dimensions.get('window');
const MadeForYou = () => {
    return(
        <View style={{flex:1, width:width}}>
            <HomeContainer />
        </View>
    )
}

export default MadeForYou;


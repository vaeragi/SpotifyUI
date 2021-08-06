import React, {useState} from 'react';
import { View, Text } from 'react-native';

import PagerView from 'react-native-pager-view';


const Pager = (props) => {
    console.log(props, "Pager")
    return(
        <PagerView style={{flex:1}} initialPage={0}>
            <View   key="1">
                <Text>Hello 1</Text>
            </View>
            <View   key="2">
                <Text>Hello 2</Text>
            </View>
            <View key="3">
                <Text>Hello 3</Text>
            </View>
            <View key="4">
                <Text>Hello 4</Text>
            </View>
        </PagerView>
    )
}

export default Pager;
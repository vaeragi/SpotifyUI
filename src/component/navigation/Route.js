import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MusicPlayer from '../view/PlayerScreen/MusicPlayer';

const Stack = createNativeStackNavigator();

const Route = () => {

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='MusicPlayer' screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={Tabs}/>
            <Stack.Screen name='MusicPlayer' component={MusicPlayer} />
        </Stack.Navigator>
    </NavigationContainer>
    )
    
}

export default Route;
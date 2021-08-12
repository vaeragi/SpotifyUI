import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MusicPlayer from '../view/PlayerScreen/MusicPlayer';
import { ArtistContainer } from '../view';

const Stack = createNativeStackNavigator();

const Route = () => {

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='ArtistScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={Tabs}/>
            <Stack.Screen name='MusicPlayer' component={MusicPlayer} />
            <Stack.Screen name='ArtistScreen' component={ArtistContainer} />
        </Stack.Navigator>
    </NavigationContainer>
    )
    
}

export default Route;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MusicPlayer from '../view/PlayerScreen/MusicPlayer';
import { ArtistContainer } from '../view';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Route = () => {

    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
            <Drawer.Screen name='HomeScreen' component={Tabs}/>
            <Drawer.Screen name='MusicPlayer' component={MusicPlayer} />
            <Drawer.Screen name='ArtistScreen' component={ArtistContainer} />
        </Drawer.Navigator>
    </NavigationContainer>
    )
    
}

export default Route;
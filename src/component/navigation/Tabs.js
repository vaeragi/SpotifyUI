import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeContainer, LibraryContainer, ProfileContainer, SearchContainer} from '../view/index';
import CustomTab from '../common/CustomTab';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator  initialRouteName='HomeTab' screenOptions={{headerShown:false}} tabBar={(props) => <CustomTab {...props} />}>
        <Tab.Screen name='HomeTab' component={HomeContainer}/>
        <Tab.Screen name='SearchTab' component={SearchContainer} /> 
        <Tab.Screen name='LibraryTab' component={LibraryContainer} />
        <Tab.Screen name='ProfileTab' component={ProfileContainer} />
    </Tab.Navigator>
    )
    
}

export default Tabs;
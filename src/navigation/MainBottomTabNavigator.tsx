import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../ui/HomeScreen';
import SurfScreen from '../ui/SurfScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

const MainBottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Surf" component={SurfScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainBottomTabNavigator
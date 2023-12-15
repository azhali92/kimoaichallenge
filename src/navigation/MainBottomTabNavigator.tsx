import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../features/home/HomeScreen';
import SurfScreen from '../features/surf/SurfScreen';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    Surf: undefined;
};

const BottomTab = createBottomTabNavigator<RootStackParamList>()

const MainBottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name="Home" component={HomeScreen} />
                <BottomTab.Screen name="Surf" component={SurfScreen} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
}

export default MainBottomTabNavigator
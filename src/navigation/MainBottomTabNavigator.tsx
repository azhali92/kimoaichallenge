import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import HomeScreen from '../features/home/HomeScreen';
import ActivityDetail from '../features/activitydetail/ActivityDetail';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../assets/CustomIcon';
import { FONT } from '../constants/font';
import { COLOR } from '../constants/colors';

type RootStackParamList = {
    Home: undefined;
    Surf: undefined;
    Festival: undefined;
    Volcano: undefined;
};

const BottomTab = createBottomTabNavigator<RootStackParamList>()

const MainBottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}>
                <BottomTab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Home"),
                 }}/>
                <BottomTab.Screen 
                    name="Surf" 
                    component={ActivityDetail} 
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Surfing"),
                 }}/>
                 <BottomTab.Screen 
                    name="Festival" 
                    component={ActivityDetail} 
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Hula"),
                 }}/>
                 <BottomTab.Screen 
                    name="Volcano" 
                    component={ActivityDetail} 
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Vulcano"),
                 }}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

const getTabBarIcon = (focused : boolean, name : string) : ReactNode => {

    var iconName : string = ""
    switch (name) {
        case 'Home':
            iconName = "home"
            break
        case 'Surfing':
            iconName = "surfing"
            break
        case 'Hula':
            iconName = "festival"
            break
        case 'Vulcano':
            iconName = "mountain"
            break
    }

    return (
            <View style={{paddingTop : 16, backgroundColor: COLOR.WHITE, width:"100%", height : 80}}>
                <View style={{backgroundColor : COLOR.GREY1, height : 2, width: '100%', position :'absolute'}}/>
                <CustomIcon style={{textAlign : 'center', marginBottom : 5 , color : focused? COLOR.PRIMARY : COLOR.BLACK}} name={iconName} size={16}></CustomIcon>
                <Text style={{color : focused ? COLOR.PRIMARY : COLOR.BLACK, textAlign : 'center', fontFamily : FONT.IBM_PLEX_BOLD, fontSize : 10}}>{name}</Text>
                {focused && <View style={{backgroundColor : COLOR.PRIMARY, height : 4, width: '100%', position :'absolute', bottom : 15}}/>}
            </View>
    )
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
}

export default MainBottomTabNavigator
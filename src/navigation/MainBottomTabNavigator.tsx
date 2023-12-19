import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import HomeScreen from '../features/home/HomeScreen';
import ActivityDetail from '../features/activitydetail/ActivityDetail';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import CustomIcon from '../assets/CustomIcon';
import { styles } from './style';

type RootStackParamList = {
    Home: undefined;
    Surf: { activityName?: string };
    Festival: { activityName?: string };
    Volcano: { activityName?: string };
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
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Home")
                 }}/>
                <BottomTab.Screen 
                    name="Surf" 
                    component={ActivityDetail} 
                    initialParams={{ activityName : "Surfing"}}
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Surfing"),
                 }}/>
                 <BottomTab.Screen 
                    name="Festival" 
                    component={ActivityDetail} 
                    initialParams={{ activityName : "Traditional Festivals"}}
                    options={{tabBarIcon: ({focused}) => getTabBarIcon(focused, "Hula")
                 }}/>
                 <BottomTab.Screen 
                    name="Volcano" 
                    component={ActivityDetail} 
                    initialParams={{ activityName : "Volcanoes"}}
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
            <View style={styles().iconContainer}>
                <View style={styles().topShadow}/>
                <CustomIcon style={styles(focused).icon} name={iconName}></CustomIcon>
                <Text style={styles(focused).text}>{name}</Text>
                {focused && <View style={styles().bottomDash}/>}
            </View>
    )
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
}

export default MainBottomTabNavigator
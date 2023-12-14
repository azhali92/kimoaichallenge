import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {

    const navigation = useNavigation()

    const goToSurfScreen = () => {
        console.log("YOOO")
        navigation.navigate('Surf' as never);
    }

    return (
        <>
            <TouchableOpacity onPress={goToSurfScreen}><Text>Screen111</Text></TouchableOpacity>
        </>
    )
}

export default HomeScreen
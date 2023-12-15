import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getHighlightData } from "./homeDataSlice";
import { fetchHighlights } from "./homeAPIs";

const HomeScreen = () => {

    const navigation = useNavigation()
    const dispatch : AppDispatch = useDispatch();

    const highlightData = useSelector(getHighlightData)

    const goToSurfScreen = () => {
        console.log("YOOO")
        // navigation.navigate('Surf');
        dispatch(fetchHighlights())
    }

    return (
        <>
            {console.log("highlightsData --> ", highlightData)}
            <TouchableOpacity onPress={goToSurfScreen}><Text>Screen1@@</Text></TouchableOpacity>
        </>
    )
}

export default HomeScreen
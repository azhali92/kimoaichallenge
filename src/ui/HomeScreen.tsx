import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHighlights } from "../actions/appActions";
import { RootState } from "../store/store";

const HomeScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const highlightsData = useSelector((state : RootState) => state.AppReducer.highlightData);

    const goToSurfScreen = () => {
        console.log("YOOO")
        //navigation.navigate('Surf' as never);
        dispatch(fetchHighlights() as any)
    }

    return (
        <>
            {console.log("highlightsData --> " , highlightsData)}
            <TouchableOpacity onPress={goToSurfScreen}><Text>Screen1@@</Text></TouchableOpacity>
        </>
    )
}

export default HomeScreen
import { Text, TouchableOpacity } from "react-native"
import React, { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getActivityData, getCategoryData, getHighlightData } from "./homeDataSlice";
import { fetchActivities, fetchCategories, fetchHighlights } from "./homeAPIs";
import CustomIcon from "../../assets/CustomIcon";
import FastImage from "react-native-fast-image";
import { FONT } from "../../constants/font";
import TitleBar from "../../components/titleBar";
import Header from "../../components/header";
import NetInfo from "@react-native-community/netinfo";

const HomeScreen = () => {

    const navigation = useNavigation()
    const dispatch : AppDispatch = useDispatch();

    const highlightData = useSelector(getHighlightData)

    const activityData = useSelector(getActivityData)

    const categoryData  = useSelector(getCategoryData) as Array<Object>

    //Add this within the App component
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            console.log(state);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    

    const goToSurfScreen = () => {
        console.log("YOOO")
        navigation.navigate('Festival');
        // dispatch(fetchHighlights())
        // dispatch(fetchActivities('Surfing'))
        // dispatch(fetchCategories())
    }

    return (
        <>
            {console.log("categoryData --> ", categoryData?.[0])}
            <TouchableOpacity onPress={goToSurfScreen}><Text style={{fontFamily : FONT.IBM_PLEX_REGULAR, fontSize : 30}}>Screen1@</Text></TouchableOpacity>
            <CustomIcon name={"home"} size={24} color="red"></CustomIcon>
            <FastImage
                style={{ width: 100, height: 100 }}
                source={require('./../../assets/images/guide.png')}
            />
            <TitleBar/>
            <Header text="fff"/>


        </>
    )
}

export default HomeScreen
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getActivityData, getCategoryData, getHighlightData } from "./homeDataSlice";
import { fetchActivities, fetchCategories, fetchHighlights } from "./homeAPIs";
import TitleBar from "../../components/titleBar";
import NetInfo from "@react-native-community/netinfo";
import MyButton from "../../components/mybutton";
import TravelGuide from "../../components/travelguide";
import { styles } from "./styles";
import { BOOK_A_TRIP } from "../../constants";
import HomeBanner from "../../components/homebanner";
import Highlights from "../../components/highlights";
import Categories from "../../components/categories";

const HomeScreen = () => {

    const dispatch : AppDispatch = useDispatch();

    const highlightData = useSelector(getHighlightData)

    const categoryData  = useSelector(getCategoryData) as Array<Object>

    //Add this within the App component
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            // console.log(state);
        });
        dispatch(fetchHighlights())
        dispatch(fetchCategories())
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.bookatrip}><MyButton text={BOOK_A_TRIP} ></MyButton></View>
                <ScrollView>
                    <TitleBar/>
                    <HomeBanner/>
                    <Highlights highlightsData={highlightData}/>
                    <Categories categoriesData={categoryData}/>
                    <TravelGuide/>
                    <View style={styles.bottomGap}></View>
                </ScrollView>
            </View>

        </>
    )
}

export default HomeScreen
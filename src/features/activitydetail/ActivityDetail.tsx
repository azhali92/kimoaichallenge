import { ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../home/homeAPIs";
import { getActivityData } from "../home/homeDataSlice";
import { useFocusEffect } from "@react-navigation/native";
import ActivityBanner from "../../components/activitybanner";
import TravelGuide from "../../components/travelguide";
import { FONT } from "../../constants/font";
import { COLOR } from "../../constants/colors";
import MyButton from "../../components/mybutton";
import { BOOK_A_TRIP } from "../../constants";
import TopSpot from "../../components/topSpots";

const ActiivityDetailScreen = (props : any) => {

    interface ActivityData {
        name : string
        description : string,
        image : string,
        activities : Array<{ name : string }>
    }

    const dispatch : AppDispatch = useDispatch();
    const activityData = useSelector(getActivityData) as ActivityData

    useFocusEffect(
        React.useCallback(() => {
            dispatch(fetchActivities(props?.route?.params?.activityName))
        }, [props?.route?.params?.activityName])
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.bookatrip}><MyButton text={BOOK_A_TRIP}></MyButton></View>
                <ActivityBanner imgUrl={activityData.image} name={activityData.name}/>
                <Text style={styles.text}>{activityData.description}</Text>
                <TopSpot data={activityData.activities}></TopSpot>
                <TravelGuide></TravelGuide>
                <View style={styles.bottomGap}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        backgroundColor : '#E6F2F2'
    },
    text : {
        fontFamily : FONT.IBM_PLEX_REGULAR,
        fontSize : 16,
        paddingHorizontal : 16,
        color : COLOR.BLACK,
        paddingTop : 40,
        backgroundColor : COLOR.WHITE
    },
    bookatrip : {
        position : 'absolute', 
        zIndex : 10, 
        width : '100%', 
        bottom : 30
    },
    bottomGap : { height : 100 }
})

export default ActiivityDetailScreen

import { StyleSheet, Text, View } from "react-native"
import React from 'react';
import { COLOR } from "../constants/colors";
import Header from "./header";
import { TRAVEL_GUIDE } from "../constants";
import { FONT } from "../constants/font";
import FastImage from "react-native-fast-image";

const TravelGuide = () => {
    return (
        
        <View style={styles.main}>
            <Header text={TRAVEL_GUIDE}/>
            <View style={styles.container}>
                <Text style={styles.name}>Hadwin Malone</Text>
                <Text style={styles.subtext}>Guide since 2012</Text>
                <FastImage
                    style={styles.pic}
                    source={require('./../assets/images/guide.png')}
                />
                <Text style={styles.contact}>Contact</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        marginTop : 24
    },
    container : {
        padding : 24,
        borderRadius : 8,
        backgroundColor : COLOR.WHITE,
        marginHorizontal : 16
    },
    name : {
        fontFamily : FONT.IBM_PLEX_BOLD,
        fontSize : 24,
        color : COLOR.BLACK
    },
    subtext : {
        fontFamily : FONT.IBM_PLEX_REGULAR,
        fontSize : 16,
        color : COLOR.BLACK,
        marginTop : 8
    },
    pic : { 
        width: 74, 
        height: 74,
        position : 'absolute',
        right : 24,
        top : 24
    },
    contact : {
        fontFamily : FONT.IBM_PLEX_BOLD,
        fontSize : 16,
        color : COLOR.PRIMARY,
        borderColor : COLOR.PRIMARY,
        marginTop : 33,
        paddingVertical : 8,
        borderWidth : 1,
        borderRadius : 8,
        width : 116,
        textAlign : 'center'
    }
})

export default TravelGuide
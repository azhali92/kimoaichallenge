import React from "react"
import { StyleSheet, Text, View } from "react-native"
import FastImage from "react-native-fast-image"
import { FONT } from "../constants/font"

const HomeBanner = () => {
    return (
        <View style={styles.headerImgContainer}>
            <FastImage
                style={styles.headerImg}
                source={require('./../assets/images/home.png')}
            />
            <View style={styles.headerImgTextContainer}>
                <Text style={styles.headerImgText}>Welcome to Hawaii</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerImgContainer : {
        height : 480, 
        width : '100%'
    },
    headerImg : {
        position : 'absolute', 
        width : '100%',
        height : '100%'
    },
    headerImgTextContainer : {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImgText : {
        fontSize : 56, 
        color : 'rgba(255, 255, 255, 0.7)', 
        textAlign : 'center', 
        fontFamily : FONT.IBM_PLEX_BOLD
    }
})

export default HomeBanner
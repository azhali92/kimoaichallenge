import { StyleSheet, Text, View } from "react-native"
import React from 'react';
import FastImage from "react-native-fast-image";
import { COLOR } from "../constants/colors";

const TitleBar = () => {
    return (
        <View style={styles.container}>
            <FastImage
                style={{ height: 35 }}
                source={require('./../assets/images/aloha.png')}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 80,
        backgroundColor : COLOR.WHITE,
        justifyContent : 'center'
    }
})

export default TitleBar
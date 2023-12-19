import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from 'react';
import { FONT } from "../constants/font";
import { COLOR } from "../constants/colors";

const MyButton = (props : { text: string, onPress?: () => void }) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.textstyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textstyle : {
        backgroundColor: COLOR.PRIMARY, 
        marginHorizontal : 16, 
        borderRadius : 8, 
        textAlign : 'center', 
        paddingVertical : 12, 
        fontFamily : FONT.IBM_PLEX_BOLD, 
        color : COLOR.WHITE, 
        fontSize : 16, 
        elevation : 5
    }
})

export default MyButton
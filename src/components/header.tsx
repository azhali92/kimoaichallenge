import { StyleSheet, Text, View } from "react-native"
import React from 'react';
import { FONT } from "../constants/font";
import { COLOR } from "../constants/colors";

interface Props {
    text: string ;
}

const Header = (props : Props) => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    text : {
        fontFamily : FONT.IBM_PLEX_BOLD,
        color : COLOR.BLACK,
        fontSize : 16,
        marginBottom : 16,
        marginStart : 16
    }
})

export default Header
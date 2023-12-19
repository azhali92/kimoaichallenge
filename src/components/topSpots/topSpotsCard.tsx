import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../constants/colors"
import { FONT } from "../../constants/font"
import React from "react"

const TopSpotCard = (props : {text : string , index : number}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.index + "." + " " + props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 8,
        backgroundColor : COLOR.WHITE,
        paddingHorizontal : 16,
        paddingVertical : 21.5,
        elevation : 6
    },
    text : {
        fontSize : 16,
        fontFamily : FONT.IBM_PLEX_BOLD,
        color : COLOR.PRIMARY
    }
})

export default TopSpotCard
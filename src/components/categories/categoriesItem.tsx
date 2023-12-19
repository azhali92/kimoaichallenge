import { useState } from "react"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FONT } from "../../constants/font"
import { COLOR } from "../../constants/colors"
import FastImage from "react-native-fast-image"

const CategoriesItems = (props : { text? : string , subtext? : string}) => {

const [isOpen, setIsOpen] = useState(false)

const setOpen = () => {
    setIsOpen(!isOpen)
}

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={setOpen}><Text style={styles.text}>{props.text}</Text>
                {isOpen && <Text style={styles.text2}>{props.subtext}</Text>}
            </TouchableOpacity>
            <FastImage
                style={styles.arrowImg}
                source={require('../../assets/images/arrow_forward.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 8,
        padding : 24,
        backgroundColor : COLOR.WHITE,
    },
    text : {
        fontFamily : FONT.IBM_PLEX_REGULAR,
        fontSize : 16
    },
    text2 : {
        fontFamily : FONT.IBM_PLEX_REGULAR,
        fontSize : 12
    },
    arrowImg : { 
        position : 'absolute',
        top : 26,
        right : 26,
        width: 16, 
        height: 16,
    }
})

export default CategoriesItems
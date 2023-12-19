import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import FastImage from "react-native-fast-image"
import { FONT } from "../../constants/font"
import { COLOR } from "../../constants/colors"
import { useNavigation } from "@react-navigation/native"

const HightlightsCard = (props : {imgUrl? : string, heading? : string, subheading? : string, onPress? : () => void}) => {

    const navigation = useNavigation()

    const onPressCard = () => {

        switch (props.heading){
            case "Surfing":
                navigation.navigate('Surf', {activityName : "Surfing"});
                break;
            case "Traditional Festivals":
                navigation.navigate('Festival', {activityName : "Traditional Festivals"});
                break;
            case "Volcanoes":
                navigation.navigate('Volcano', {activityName : "Volcanoes"});
                break;
        }
        

    }
    
    return (
        <TouchableOpacity onPress={onPressCard}>
            <View style={styles.container}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: props.imgUrl,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode="stretch"
                />
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.heading}>{props.heading}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.subheading}>{props.subheading} </Text>
                <View>
                    <FastImage
                        style={styles.arrowImg}
                        source={require('./../../assets/images/arrow_round.png')}
                    />
                </View>

            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container : {
        borderRadius : 8,
        backgroundColor : COLOR.WHITE,
        width : 304,
        elevation : 5,
        marginBottom : 40
    },
    image : {
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8,
        backgroundColor: "transparent",
        width : '100%',
        overflow: "hidden",
        height : 170
    },
    heading : {
        marginTop : 24,
        marginHorizontal : 24,
        fontFamily : FONT.IBM_PLEX_BOLD,
        fontSize : 24,
        color : COLOR.PRIMARY
    },
    subheading : {
        marginHorizontal : 24,
        marginTop : 16,
        minHeight : 40,
        fontFamily : FONT.IBM_PLEX_REGULAR,
        fontSize : 16,
        color : COLOR.DARKTEXT
    },
    arrowImg : { 
        alignSelf : 'flex-end',
        marginTop : 5,
        marginEnd : 24,
        marginBottom : 24,
        width: 40, 
        height: 40,
    }
})

export default HightlightsCard
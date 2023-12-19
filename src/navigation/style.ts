import { StyleSheet } from "react-native";
import { COLOR } from "../constants/colors";
import { FONT } from "../constants/font";



export const styles = (focused? : boolean) => StyleSheet.create({
    iconContainer : { 
        paddingTop : 16, 
        backgroundColor: 
        COLOR.WHITE, 
        width:"100%", 
        height : 80
    },
    icon : {
        textAlign : 'center', 
        marginBottom : 5,
        fontSize : 16,
        color : focused? COLOR.PRIMARY : COLOR.BLACK
    },
    topShadow : {
        backgroundColor : COLOR.GREY1, 
        height : 2, 
        width: '100%', 
        position :'absolute'
    },
    text : {
        color : focused ? COLOR.PRIMARY : COLOR.BLACK, 
        textAlign : 'center', 
        fontFamily : FONT.IBM_PLEX_BOLD, 
        fontSize : 10
    },
    bottomDash : {
        backgroundColor : COLOR.PRIMARY, 
        height : 4, 
        width: '100%', 
        position :'absolute', 
        bottom : 15
    }
})
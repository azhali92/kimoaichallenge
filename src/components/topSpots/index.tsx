import React from "react"
import Header from "../header"
import { FlatList, StyleSheet, View } from "react-native"
import TopSpotCard from "./topSpotsCard"
import { COLOR } from "../../constants/colors"


const TopSpot = (props : { data : Array<{name : string}> }) => {

    const renderTopSpotData  = (props : {item : { name : string } , index  : number}) => {

        const item = props.item
        return (
            <View style={styles.itemContainer}>
               <TopSpotCard text={item.name} index={props.index+1} ></TopSpotCard>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Header text={"Top Spots"}></Header>
            <FlatList
                scrollEnabled={false}
                data={props.data}
                renderItem={renderTopSpotData}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={ item => item.name }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        paddingTop : 40, 
        backgroundColor : COLOR.WHITE
    },
    contentContainer : {
        paddingStart : 16, 
        paddingTop : 5, 
        marginBottom : 40
    },
    itemContainer : {
        marginEnd : 16, 
        marginBottom : 10
    }
})

export default TopSpot
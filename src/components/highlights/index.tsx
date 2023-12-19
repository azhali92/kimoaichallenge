import { FlatList, StyleSheet, Text, View } from "react-native"
import HightlightsCard from "./highlightsCard"
import Header from "../header"
import { COLOR } from "../../constants/colors"

interface HighLightItem {
    title : string
    description : string
    image : string
}

const renderHighlightData  = (props : {item : Object , index  : number}) => {

    const item = props.item as HighLightItem

    return (
        <View style={styles.itemContainer}>
           <HightlightsCard heading={item.title} subheading={item.description} imgUrl={item.image}></HightlightsCard>
        </View>
    )
}

const Highlights = (props : {highlightsData? : Object | null | undefined }) => {
    return (
        <View style={styles.container}>
            <Header text="Hightlights"></Header>
            <FlatList
                data={props.highlightsData as Array<HighLightItem>}
                renderItem={renderHighlightData}
                horizontal={true}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={ item => item.title }
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer : {
        marginEnd : 16
    },
    container : {
        paddingTop : 40, 
        backgroundColor : COLOR.WHITE
    },
    contentContainer : {
        paddingStart : 16
    }
})

export default Highlights
import { FlatList, View } from "react-native"
import Header from "../header"
import { COLOR } from "../../constants/colors"
import CategoriesItems from "./categoriesItem"

interface CategoryItem {
    name : string
    activities : Array<{ title : string }>
}

const renderCategoryData  = (props : {item : Object , index  : number}) => {

    const item = props.item as CategoryItem

    var sublist = ""
    item.activities.forEach( (it) => {
        sublist = sublist + "\n\n" + it.title
    })

    return (
        <View style={{marginEnd : 16, marginBottom : 10}}>
           <CategoriesItems text={item.name} subtext={sublist}></CategoriesItems>
        </View>
    )
}

const Categories = (props : {categoriesData? : Object | null | undefined }) => {
    return (
        <View style={{paddingTop : 20, marginTop : 16}}>
            <Header text="Categories"></Header>
            <FlatList
                scrollEnabled={false}
                data={props.categoriesData as Array<CategoryItem>}
                renderItem={renderCategoryData}
                contentContainerStyle={{paddingStart : 16}}
                keyExtractor={ item => item.name }
            />
        </View>
    )
}

export default Categories
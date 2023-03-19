import React from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import Mealitems from '../components/Mealitems';
import { MEALS } from '../data/dummy-data';
function MealsOverview({route}) {

   
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) =>
    {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMeals(itemData)
    {
        const item = itemData.item;
        const mealItemProps = 
        {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        return <Mealitems {...mealItemProps}/>
    }
  return (
    <View style={styles.container}>
        <FlatList data={displayMeals} keyExtractor={(item)=>
        item.id} renderItem={renderMeals}/>
        <Text>Meals Overview Screen - {catId }</Text>
    </View>
  )
}

export default MealsOverview;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
     
    },
  });
  
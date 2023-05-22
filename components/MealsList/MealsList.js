import React from 'react'
import { Text, View ,FlatList,StyleSheet} from 'react-native'
import Mealitems from './Mealitems';

function MealsList({items}) {
 
   
    function renderMeals(itemData)
    {
        const item = itemData.item;
        const mealItemProps = 
        {
            id: item.id,
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
        <FlatList data={items} keyExtractor={(item)=>
        item.id} renderItem={renderMeals}/>
    </View>
  )
  
}

export default MealsList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
  });
  
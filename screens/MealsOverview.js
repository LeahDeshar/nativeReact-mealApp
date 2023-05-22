import React,{useLayoutEffect} from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import Mealitems from '../components/MealsList/Mealitems';

import { MEALS,CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
function MealsOverview({route,navigation}) {
    const catId = route.params.categoryId;



    const displayMeals = MEALS.filter((mealItem) =>
    {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    
    useLayoutEffect(() => {
      const categoryTitle =CATEGORIES.find((category)=> category.id == catId).title;
      navigation.setOptions({
        title: categoryTitle
      });  
    }, [catId,navigation])
    return <MealsList items={displayMeals}/>
   
}

export default MealsOverview;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
  });
  
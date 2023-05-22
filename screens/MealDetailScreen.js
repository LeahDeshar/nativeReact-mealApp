import {Image, Text, View,StyleSheet,ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favoritesContext';

function MealDetailScreen({ route,navigation }) {
    const favoriteMealsCtx =useContext(FavoritesContext);

    
    const mealId = route.params.mealId;
    const seletedMeal = MEALS.find((meal) => meal.id === mealId);

   

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId); 

    function changeFavoriteStatusHandler()
    {
        if(mealIsFavorite)
        {
          favoriteMealsCtx.removeFavorite(mealId);
        }
        else 
        {
          favoriteMealsCtx.addFavorite(mealId);
        }
    }
    useLayoutEffect(()=>
    {
      navigation.setOptions({
        headerRight: () =>{
          return (<IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavoriteStatusHandler}/>)
        }

      });
    },[navigation,changeFavoriteStatusHandler]);
  return (
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: seletedMeal.imageUrl}}/>
        <Text style={styles.title}>{seletedMeal.title}</Text>
       <MealDetails duration={seletedMeal.duration} complexity={seletedMeal.complexity} 
       textStyle={styles.detailText}
       affordability={seletedMeal.affordability}/>

        <View style={styles.listOuterContianer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={seletedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={seletedMeal.steps}/>

          </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer:
  {
    marginBottom: 32
  },
  image: 
  {
    width: '100%',
    height: 320,
  },
  title: 
  {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center'
  },
  detailText: {
    color: '#000000c2'
  },
  listContainer:{
    width: '80%',

  },
  listOuterContianer: 
  {
    alignItems: 'center'

  }
  
})
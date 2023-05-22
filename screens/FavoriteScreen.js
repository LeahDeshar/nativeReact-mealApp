import React, { useContext } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/favoritesContext'
import { MEALS } from '../data/dummy-data'

function FavoriteScreen() {

  const favoriteMealsCtx=useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal=>favoriteMealsCtx.ids.includes(meal.id))

  if(favoriteMeals.length === 0)
  {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }
  return (
    <MealsList items={favoriteMeals}/>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: 
  {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
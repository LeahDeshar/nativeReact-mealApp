import {Image, Text, View,StyleSheet,ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

function MealDetailScreen({ route,navigation }) {
    const mealId = route.params.mealId;
    const seletedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressedHandler()
    {
      console.log("Pressed");
    }
    useLayoutEffect(()=>
    {
      navigation.setOptions({
        headerRight: () =>{
          return <IconButton icon={"star"} onPress={headerButtonPressedHandler}/>
        }

      });
    },[navigation,headerButtonPressedHandler]);
  return (
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: seletedMeal.imageUrl}}/>
        <Text style={styles.title}>{seletedMeal.title}</Text>
       <MealDetails duration={seletedMeal.duration} complexity={seletedMeal.complexity} 
       textStyle={styles.detailText}
       affordability={seletedMeal.affordability}/>


        {/* <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Ingredients</Text>
        </View> */}
        <View style={styles.listOuterContianer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={seletedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={seletedMeal.steps}/>

          </View>

        </View>
            {/* {seletedMeal.ingredients.map((ingredient) =>
            (
                <Text key={ingredient}>{ingredient}</Text>
            ))} */}
           

            {/* <View style={styles.subtitleContainer}>
                 <Text style={styles.subtitle}>Steps</Text>
            </View> */}
            {/* {seletedMeal.steps.map((step) =>
            (
                <Text key={step}>{step}</Text>
            ))} */}
    
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
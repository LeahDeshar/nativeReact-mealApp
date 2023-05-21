import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text, Pressable,Image,StyleSheet } from 'react-native'
import MealDetails from './MealDetails';

function Mealitems({id,title,imageUrl,duration,complexity,affordability}) {

    const navigation = useNavigation();
    function selectMealItemHandler()
    {
        navigation.navigate('MealDetail',{
            mealId: id
        });
    }


  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}> 
            <View>
                <Image source={{uri: imageUrl}} style={styles.image}/>
             <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} 
            affordability={affordability} 
            complexity={complexity}/>
            
            {/* <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View> */}
            </View>
        </Pressable>
    </View>
  )
}

export default Mealitems



const styles = StyleSheet.create({
    mealItem:
    {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden':'visible',

        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {widht: 0,height: 2},
        shadowRadius: 8
    },
    innerContainer: 
    {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: 
    {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
   
  });
  
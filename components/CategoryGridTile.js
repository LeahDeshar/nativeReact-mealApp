import React from 'react'
import { Pressable, View, Text, StyleSheet, Platform} from 'react-native'

function CategoryGridTile({title,color}) {
  return (
    <View style={styles.gridItem}>
        <Pressable style={({pressed})=>[styles.button,pressed ? styles.btnPressed : null]} android_ripple={{color: '#ccc'}}>
            <View style={[styles.innerContainer,{backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile


const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
     borderRadius: 8,
     elevation: 4,
     backgroundColor: 'white',
     shadowColor: 'black',
     shadowOpacity: 0.25,
     shadowOffset: {width:0,height: 2},
     shadowRadius: 8,
     overflow: 'hidden',
    },
    button:
    {
        flex: 1,
    },
    btnPressed: 
    {
        opacity: 0.5
    },
    innerContainer: 
    {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title:{
        fontSize: 19
    }

  });
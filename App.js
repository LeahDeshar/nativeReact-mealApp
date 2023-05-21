import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    contentStyle : {backgroundColor: '#caeffc75'},
    // header bg color
    headerStyle: {backgroundColor: '#1e86ac75'},
    // sceneContainerStyle: {backgroundColor: "#000"},
    // header font color
      headerTintColor: '#3f3b3b',
      drawerContentStyle: {
        backgroundColor: "#7daec049"
      },
      drawerInactiveTintColor: "black",
      drawerActiveTintColor: "#ffffff",
      drawerActiveBackgroundColor: "#000000d4"


  }}>
    <Drawer.Screen name="Home" component={CategoriesScreen} 
    options={{
      drawerIcon:({color,size}) =>
       ( <Ionicons name="list" color={color} size={size}/>)
     
    }}/>
    <Drawer.Screen name="Favorites" component={FavoriteScreen} 
     options={{
      drawerIcon:({color,size}) =>
       ( <Ionicons name="star" color={color} size={size}/>)
     
    }}
    />
  </Drawer.Navigator>
}
export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        title: 'All Categories',
        contentStyle : {backgroundColor: '#caeffc75'},
        // header bg color
        headerStyle: {backgroundColor: '#1e86ac75'},
        // header font color
          headerTintColor: '#3f3b3b',
      }}>
        <Stack.Screen
         name='Drawer' 
         component={DrawerNavigator}
         options={{
          headerShown: false
        
         }}
          />
        <Stack.Screen 
        name="MealsOverview"
        component={MealsOverview}
        // options={({route,navigation}) =>{
        //   const catId = route.params.categoryId;

        //   return {
        //     title: catId
        //   }
        // }}
        ></Stack.Screen>
        <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
          title: 'About The Meal'
        }}/>
        {/* <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
          headerRight: () =>{
            return <Button title="Tap" onPress={}/>
          }
        }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

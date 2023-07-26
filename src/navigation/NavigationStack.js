import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import RestaurantScreen from '../screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
    )
}
import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from "../screens/HomeScreen"
import RestaurantScreen from '../screens/RestaurantScreen'

const Drawer = createDrawerNavigator()

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
        </Drawer.Navigator>
    )
}  
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import AddRestaurant from "../screens/AddRestaurant";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fe713d",
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Add Restaurant'
        component={AddRestaurant}
        options={{
          tabBarLabel: "Agregar Plato",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='add-circle'color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Restaurant'
        component={RestaurantScreen}
        options={{
          tabBarLabel: "Restaurantes",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='fastfood' color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

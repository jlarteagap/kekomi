import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({navigation:{navigate}}){
    const goToRestaurant = () => {navigate("Restaurant")}
    return(
        <View>
            <Text>Home Screen</Text>
            <Button onPress={goToRestaurant} title="Ir a Restaurant" / >
        </View>
    )
}
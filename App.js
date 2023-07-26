import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Restaurant } from './src/components/restaurants/Index';
import {NavigationContainer} from '@react-navigation/native'
import NavigationStack from './src/navigation/NavigationStack';
export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#acacac'
  }
});

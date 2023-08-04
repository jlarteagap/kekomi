import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'

import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';
export default function App() {
  return (
      <NavigationContainer>
        <NavigationTab />
        {/* <NavigationDrawer /> */}
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

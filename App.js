import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pagesExpo/homePage';
import Details from './pagesExpo/details';
import StarShips from './pagesExpo/StartShips';
import Movies from './pagesExpo/Movies';
import Criadores from './pagesExpo/criadores';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage"  screenOptions={{ headerStyle: { backgroundColor: 'black' },headerTintColor: '#FFD700',}}>
        <Stack.Screen name="PERSONAGENS" component={HomePage} />
        <Stack.Screen name="DETALHES" component={Details} />
        <Stack.Screen name = "Naves" component={StarShips}/>
        <Stack.Screen name = "Filmes" component={Movies}/>
        <Stack.Screen name = "Criadores" component={Criadores}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'gray',
    color: 'orange'
  }
});

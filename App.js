import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

//navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import AddItemScreen from './src/screens/AddItemScreen';
import HomeScreen from './src/screens/HomeScreen';

//custom header
import CustomHeader from './src/layout/CustomHeader';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#1d94f0" style="light" />
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        header : (props) => <CustomHeader {...props}/>
      }}>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AddItem" component={AddItemScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

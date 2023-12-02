import { View, Text, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Styles } from './src/assets/Styles';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/Routes/Routes';
import Dashboard from './src/screens/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const Stack = createNativeStackNavigator();
  const [isLogged, setLogged] = useState('');

  const Logged = async() => {
    const log = await AsyncStorage.getItem('log')
    if(log === 'success')
    {
      setLogged('success')
    }
    else{
      setLogged('')
    }
  }

  useEffect(() => {
    Logged()
  }, [isLogged])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogged === 'success' ? Routes.Dashboard : Routes.Login} screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={Login}/>
        <Stack.Screen name={Routes.Signup} component={Signup}/>
        <Stack.Screen name={Routes.Dashboard} component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
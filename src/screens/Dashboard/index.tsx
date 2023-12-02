import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Profile from '../Profile';
import Settings from '../Settings';
import { Routes } from '../../Routes/Routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';

const Tab = createBottomTabNavigator();

const Dashboard = () => {

    const LogInfo = async() => {
        await AsyncStorage.setItem('log', 'success')
    }

    useEffect(() => {
        LogInfo();
    })
    
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen
                name={Routes.Home}
                component={Home}
                options={{
                    tabBarLabel: () => <Text style={{fontSize: 15, color: "black", marginBottom: "2%"}}>Home</Text>,
                    tabBarIcon: () => <Icon style={{marginBottom: "-5%"}} name='home-outline' size={20} color='blue' />
                }} />
            <Tab.Screen
                name={Routes.Profile}
                component={Profile}
                options={{
                    tabBarLabel: () => <Text style={{fontSize: 15, color: "black", marginBottom: "0.8%"}}>Profile</Text>,
                    tabBarIcon: () => <Icon style={{marginBottom: "-6%"}} name='person-outline' size={20} color='blue' />
                }} />
            <Tab.Screen
                name={Routes.Settings}
                component={Settings}
                options={{
                    tabBarLabel: () => <Text style={{fontSize: 15, color: "black", marginBottom: "2%"}}>Settings</Text>,
                    tabBarIcon: () => <Icon style={{marginBottom: "-5%"}} name='settings-outline' size={20} color='blue' />
                }} />
        </Tab.Navigator>
    );
}

export default Dashboard;
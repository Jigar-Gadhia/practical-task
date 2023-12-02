import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { Styles } from '../../assets/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const fetchUserData = async() => {
        const id = await AsyncStorage.getItem('email')
        const passw = await AsyncStorage.getItem('pass')
        const log = await AsyncStorage.getItem('log')
        console.log(log)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return(
        <View style={Styles.container}>
            <Text>Home</Text>
        </View>
    )
}

export default Home;
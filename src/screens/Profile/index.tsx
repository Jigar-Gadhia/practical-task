import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../assets/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

    const name = async () => {
        const name = await AsyncStorage.getItem('name')
        return name
    }

    return (
        <View style={Styles.container}>
            <Text>{name}</Text>
        </View>
    )
}

export default Profile;
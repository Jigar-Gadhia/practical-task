import { ImageBackground, Text, View } from 'react-native'
import React from 'react';
import { Styles } from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../Routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {

    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <View style={{ height: "10%", width: "70%" }}>
                <Button
                    title='Logout'
                    backgroundColor={Colors.Orange}
                    onPress={async () => {
                        await AsyncStorage.removeItem('log')
                        navigation.navigate(Routes.Login)
                    }} />
            </View>
        </View>
    )
}

export default Settings;
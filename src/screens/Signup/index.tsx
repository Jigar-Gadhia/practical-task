import { ImageBackground, Text, ToastAndroid, View, Alert, Platform } from 'react-native'
import React, { useState } from 'react';
import { Styles } from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../Routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [pass, setPass] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [conError, setConError] = useState("");

    const Validations = async () => {

        var validator = require('validator')

        if (name === '') {
            setNameError('User name is required');
            console.log("name")
        }
        else{
            setNameError("");
        }

        if (email === "") {
            setEmailError("Please enter valid Email ID")
            console.log("email")
        }
        else(
            setEmailError("")
        )

        if (pass === "" || pass.length !== 8 || Confirm === "") {
            setPass('Password must be atleast 8 characters long')
            console.log("pass")
        }
        else{
            setPass("");
        }

        if (Confirm !== pass) {
            setConError("Password does not match")
            console.log('match')
        }
        else{
            setConError("");
        }

        if (email !== "" && pass !== "" && Confirm !== "" && Confirm === pass && Confirm !== "" && name !== "" && validator.isEmail(email)) {

            // ToastAndroid.show("Success", ToastAndroid.SHORT)
            await AsyncStorage.setItem('name', name)
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('pass', pass)
            await AsyncStorage.setItem('con', Confirm)
            navigation.navigate(Routes.Login)
            console.log("success")
        }
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={Styles.imgBack}>
                <View style={Styles.login}>
                    <View style={Styles.loginView}>
                        <Icon name='camera' size={130} color={Colors.White} />
                        <View style={{ height: "38%", width: "70%", marginVertical: "25%" }}>
                            <Input
                                icon={<Icon name='person' size={28} color={Colors.Grey} />}
                                placeholder='User Name'
                                onChange={(text: string) => setName(text)}
                                borderBottom={true}
                            />
                            <Input
                                icon={<Icon name='mail-outline' size={30} color={Colors.Grey} />}
                                placeholder='Email-Address'
                                onChange={(text: string) => setEmail(text)}
                                borderBottom={true} />
                            <Input
                                icon={<Icon name='lock-closed-outline' size={28} color={Colors.Grey} />}
                                placeholder='Password'
                                onChange={(text: string) => setPass(text)}
                                borderBottom={true}
                                secure={true}
                            />
                            <Input
                                icon={<Icon name='lock-closed-outline' size={28} color={Colors.Grey} />}
                                placeholder='Retype Password'
                                borderBottom={true}
                                onChange={(text: string) => setConfirm(text)}
                                secure={true}
                            />
                            <View style={{ height: "18%", marginVertical: "5%" }}>
                                <Button
                                    title='Sign Up'
                                    backgroundColor={Colors.Orange}
                                    onPress={() => Validations()} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup;
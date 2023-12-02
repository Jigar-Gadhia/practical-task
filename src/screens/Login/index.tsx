import { ImageBackground, Text, View, ToastAndroid } from 'react-native'
import React, {useState, useEffect} from 'react';
import { Styles } from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import { Routes } from '../../Routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validator from 'validator';

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState("");
    const [cemail, setCemail] = useState("");
    const [cpass, setCpass] = useState("");

    const fetchUserData = async() => {
        const id = await AsyncStorage.getItem('email')
        const passw = await AsyncStorage.getItem('pass')
        const log = await AsyncStorage.getItem('log')
        setCemail(id)
        setCpass(passw)
        console.log(log)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const Validations = async() => {

        if(email !== cemail)
        {
            ToastAndroid.show('Invalid Email ID', ToastAndroid.LONG)
        }

        if(pass !== cpass || pass.length !== 8)
        {
            ToastAndroid.show('Password must be atleast 8 characters long', ToastAndroid.LONG)
            
        }

        if(email === cemail && pass === cpass)
        {

            ToastAndroid.show("Success", ToastAndroid.SHORT)
            navigation.navigate(Routes.Dashboard)
        }

    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={Styles.imgBack}>
                <View style={Styles.login}>
                    <View style={Styles.loginView}>
                        <Icon name='camera' size={130} color={Colors.White} />
                        <View style={{ height: "25%", width: "70%", marginVertical: "25%" }}>
                            <Input
                                icon={<Icon name='mail-outline' size={30} color={Colors.Grey} />}
                                placeholder='Email-Address'
                                borderBottom={true}
                                onChange={(text:string) => setEmail(text)} />
                            <Input
                                icon={<Icon name='lock-closed-outline' size={28} color={Colors.Grey} />}
                                placeholder='*****'
                                onChange={(text:string) => setPass(text)}
                            />
                            <View style={{ height: "25%", marginVertical: "5%" }}>
                                <Button 
                                title='Sign In' 
                                backgroundColor={Colors.Orange}
                                onPress={() => Validations()} />
                            </View>
                        </View>
                        <View style={{ height: "6%", width: "70%" }}>
                            <Button title='Sign in with Facebook' backgroundColor={Colors.Blue} />
                        </View>
                        <View style={{ height: "6%", width: "70%", marginTop: "2%" }}>
                            <Button title='Sign in with Twitter' backgroundColor={Colors.Peacock} />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "70%",
                            paddingHorizontal: 10,
                            marginTop: "2%"}}>
                           <Text style={{color: Colors.White}}>Forgot Password</Text>
                           <Text style={{color: Colors.White}}>New Here? <Text style={{textDecorationLine: "underline"}} onPress={() => navigation.navigate(Routes.Signup)}>Sign Up</Text></Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;
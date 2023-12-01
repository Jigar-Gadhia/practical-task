import { ImageBackground, Text, View } from 'react-native'
import React from 'react';
import { Styles } from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/Colors';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Login = () => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={Styles.imgBack}>
                <View style={Styles.login}>
                    <View style={Styles.loginView}>
                        <Icon name='camera' size={130} color={Colors.White} />
                        <View style={{ flex: 0.5, width: "70%", marginVertical: "25%" }}>
                            <Input
                                icon={<Icon name='mail-outline' size={30} color={Colors.Grey} />}
                                placeholder='Email-Address'
                                borderBottom={true} />
                            <Input
                                icon={<Icon name='lock-closed-outline' size={28} color={Colors.Grey} />}
                                placeholder='*****'
                            />
                            <View style={{ height: "25%", marginVertical: "5%" }}>
                                <Button title='Sign In' backgroundColor={Colors.Orange} />
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
                           <Text style={{color: Colors.White}}>New Here? <Text style={{textDecorationLine: "underline"}}>Sign Up</Text></Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;
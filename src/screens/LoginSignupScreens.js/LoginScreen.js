import React, { useState } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from'react-native'
import { titles, colors, btn1 } from '../../globals/styles'
import { AntDesign, Octicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = () => {
    const [emailfocus, setEmailFocus] = useState(false);
    const [passwordfocus, setPasswordFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);



  return (
    <View style = {styles.container}>
        <Text style = {styles.head1}> Sign In</Text>
        <View style = {styles.inputout}>
        <AntDesign name="user" size={24} 
        color={emailfocus === true ? colors.text1 : colors.text2} />
            <TextInput style = {styles.input} placeholder='Email'
            onFocus={() => {
                setEmailFocus(true)
                setPasswordFocus(false)
                setShowPassword(false)
            }}
            />
        </View>
        <View style = {styles.inputout}>
            <MaterialCommunityIcons name="lock-outline" size={24} 
            color={passwordfocus === true? colors.text1 : colors.text2} />
            <TextInput style = {styles.input} placeholder='Password'
            onFocus={() => {
                setEmailFocus(false)
                setPasswordFocus(true)
            }}
            
            secureTextEntry = {showPassword === false ? true : false}
            />
            <Octicons name = {showPassword == false ? 'eye-closed' : 'eye'}
            size = {24} color = 'black' 
            onPress={() => setShowPassword(!showPassword)} />
        </View>
        <TouchableOpacity style = {btn1}>

        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    head1 : {
        fontSize : titles.title1,
        color : colors.text1,
        textAlign : 'center',
        marginVertical : 10,
    },
    inputout : {
        flexDirection : 'row',
        width : '80%',
        marginVertical : 10,
        backgroundColor : colors.col1,
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 10,
        alignSelf : 'center',
        elevation : 20,
    },
    input : {
        fontSize : 18,
        marginLeft : 10,
        width : '80%',
    }
})

export default LoginScreen
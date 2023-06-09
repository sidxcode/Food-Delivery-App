import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {colors, hr80} from '../../globals/styles'
import logo from '../../../assets/logo.png'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text style = {styles.title}>Welcome to Foodie</Text>
      <View style = {styles.logout}>
        <Image source = {logo} style = {styles.logo}/>
      </View>
      <View style = {hr80}></View>
      <Text style = {styles.text}>Find the best food around you at lowest price .</Text>
      <View style = {hr80}></View>
      <View style = {styles.btnout}>
      <TouchableOpacity onPress={() => navigation.navigate
        ('signup')}>
        <Text style = {styles.btn}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style = {styles.btn}>Log In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#ff4242',
        width : '100%',
        alignContent : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 10,
    },
    title : {
        textAlign : 'center',
        fontSize : 52,
        color : colors.col1,
        marginVertical : 10,
        fontWeight : '200',
    },
    logout : {
        width : '80%',
        height : '30%',
        alignItems : 'center',
    },

    logo : {
      width : '100%',
      height : '100%',
    },

    text : {
      fontSize : 18,
      width : '80%',
      color : colors.col1,
      textAlign : 'center',
    },

    btnout : {
      flexDirection : 'row',
    },

    btn :{
      fontSize : 18,
      color : colors.text1,
      textAlign : 'center',
      marginVertical : 30,
      marginHorizontal : 10,
      fontWeight : '700',
      backgroundColor : '#fff',
      borderRadius : 10,
      padding : 10,
      paddingHorizontal : 20,
    }
})

export default WelcomeScreen
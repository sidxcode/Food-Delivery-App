import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {colors, hr80} from '../../globals/styles'
import logo from '../../../assets/logo.png'

const WelcomeScreen = () => {
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
      <TouchableOpacity>
        <Text style = {styles.btn}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.btn}>Login</Text>
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
        marginVertical : 20,
    },
    title : {
        textAlign : 'center',
        fontSize : 50,
        color : colors.col1,
        marginVertical : 10,
        fontWeight : '200',
    },
    logout : {
        width : '80%',
        height : '30%',
        alignItems : 'center',
        // backgroundColor : '#fff',
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
})

export default WelcomeScreen
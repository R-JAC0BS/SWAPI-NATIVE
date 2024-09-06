import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import starWarss from '../assets/fundo_dois.jpg';

const Criadores = () => {
    const fetchFonts = async () => {
        await Font.loadAsync({
          'Starjedi': require('../assets/fonts/Starjedi.otf'),
        });
        setFontLoaded(true);
      };







    return (
       <ImageBackground source={starWarss}>
         <View style = {styles.container}>
            <Text style = {[styles.create,{fontSize: 20}]}>FEITO POR</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>ROBERTO JACOBS</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>RA:1135584</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>1135584@ATITUS.EDU.BR</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>FEITO POR</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>RICARDO DAHMER</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>RA:1134697</Text>
            <Text style = {[styles.create,{fontSize: 20}]}>1135584@ATITUS.EDU.BR</Text>
           
        </View>
       </ImageBackground>
    )
}
const styles = StyleSheet.create ({
    container: {

        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent :'center',
        gap: 10
    },
    create: {
        fontFamily: 'Starjedi',
        color: '#FFD700',
        textShadowColor: '#FFD700',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        fontSize: 20,
        
      },
})
export default Criadores;

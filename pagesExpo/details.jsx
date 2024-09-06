import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import starWarsBackground from '../assets/fundo_tres.jpg';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
const Details = ({ navigation, route }) => {
    const [personagens, setPersonagens] = useState([]);
    const fetchFonts = async () => {
        await Font.loadAsync({
          'Starjedi': require('../assets/fonts/Starjedi.otf'),
        });
        setFontLoaded(true);
      };
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                setPersonagens(response.data.results);
            });
    }, []);

    const { name, imagePerson } = route.params;
    const personagemFiltrado = personagens.find(p => p.name === name);

    return (
        <ImageBackground source={starWarsBackground} style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image source={route.params.imamgePerson} style={styles.image} />
                </View>
                <View style={styles.detailsContainer}>
                    {personagemFiltrado ? (
                        <View>
                            <Text style={[styles.personName, styles.nameTitle]}>{personagemFiltrado.name}</Text>
                            <Text style={styles.personDetails}>Altura: {personagemFiltrado.height}</Text>
                            <Text style={styles.personDetails}>Peso: {personagemFiltrado.mass}</Text>
                            <Text style={styles.personDetails}>Cor do cabelo: {personagemFiltrado.hair_color}</Text>
                            <Text style={styles.personDetails}>Cor da pele: {personagemFiltrado.skin_color}</Text>
                            <Text style={styles.personDetails}>Cor dos Olhos: {personagemFiltrado.eye_color}</Text>
                            <Text style={styles.personDetails}>Gênero: {personagemFiltrado.gender}</Text>
                            <TouchableOpacity style={styles.buttonNaves} onPress={() => navigation.navigate('Naves', { name })}>
                                <Text style={styles.buttonText}>Naves</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonFilmes} onPress={() => navigation.navigate('Filmes', { name })}>
                                <Text style={styles.buttonText}>Filmes</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Text style={styles.loading}>Carregando...</Text>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#000000a0', 
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    detailsContainer: {
        alignItems: 'center',
    },
    personName: {
        color: '#FFD700',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 10,
        fontFamily: 'Starjedi'
    },
    personDetails: {
        color: '#FFD700',
        fontSize: 18,
        marginBottom: 5,

    },
    loading: {
        color: '#FFD700',
        fontSize: 35,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    buttonNaves: {
        backgroundColor: '#FFD700',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonFilmes: {
       width: 300,
        backgroundColor: '#4577D1',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    nameTitle: {
        fontFamily: 'Starjedi'
    }
});

export default Details;

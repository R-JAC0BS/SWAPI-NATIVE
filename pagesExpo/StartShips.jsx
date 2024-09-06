import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import starWarss from '../assets/fundo_dois.jpg';
import nave from '../assets/fundoNave.jpg';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const StarShips = ({ route, navigation }) => {
    const fetchFonts = async () => {
        await Font.loadAsync({
          'Starjedi': require('../assets/fonts/Starjedi.otf'),
        });
        setFontLoaded(true);
      };
    const [personagens, setPersonagens] = useState([]);
    const [starchips, Setstarchips] = useState([]);
    const [starChipsFilter, setStarChiipsFilter] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                setPersonagens(response.data.results);
            });
    }, []);

    useEffect(() => {
        if (starchips.length > 0) {
            const fetchStarships = async () => {
                const promises = starchips.map(url => axios.get(url));
                const responses = await Promise.all(promises);
                setStarChiipsFilter(responses.map(res => res.data));
            };
            fetchStarships();
        }
    }, [starchips]);

    const personagemFiltrado = personagens.find(p => p.name === route.params.name);

    useEffect(() => {
        if (personagemFiltrado) {
            Setstarchips(personagemFiltrado.starships);
        }
    }, [personagens, route.params.name]);

    return (
        <ImageBackground source={starWarss} style={styles.backgroundImage}>
            <View style={styles.container}>
                {personagemFiltrado ? (
                    <View>
                        <Text style={styles.shipsGap}>Naves pilotadas por {personagemFiltrado.name}</Text>
                    </View>
                ) : (
                    <Text style={styles.noShipsText}>Nenhuma nave encontrada</Text>
                )}

                <View style={styles.flatListContainer}>
                    {starChipsFilter.length > 0 ? (
                        <FlatList
                            data={starChipsFilter}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <ImageBackground
                                        source={nave}
                                        style={styles.cardImage}
                                        imageStyle={{ opacity: 0.3 }} 
                                    >
                                        <View style={styles.cardContent}>
                                            <Text style={styles.shipTitle}>Nome: {item.name}</Text>
                                            <Text style={styles.shipText}>Modelo: {item.model}</Text>
                                            <Text style={styles.shipText}>Passageiros: {item.passengers}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={styles.noShipsText}>Nenhuma nave associada a esse personagem</Text>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    flatListContainer: {
        width: '100%',
        marginTop: 20,
    },
    shipsGap: {
        color: '#FFD700',
        fontSize: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Starjedi'
    },
    noShipsText: {
        color: '#FFD700',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    card: {
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: '#FFD700',
        borderWidth: 2,
        padding: 1,
        marginBottom: 15,
        shadowColor: '#FFD700',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
        overflow: 'hidden',
    },
    cardImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    shipTitle: {
        color: '#FFD700',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    shipText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default StarShips;

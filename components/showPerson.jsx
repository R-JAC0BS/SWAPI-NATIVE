import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import axios from 'axios';
import starWarsBackground from '../assets/fundo_tres.jpg'; // Adicione um fundo temático Star Wars
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export function ShowPerson({ imamgePerson, name, navigation }) {
  const [personagens, setPersonagens] = useState([]);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'Starjedi': require('../assets/fonts/Starjedi.otf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    // Carregar as fontes e os dados dos personagens
    fetchFonts().then(() => setFontLoaded(true));

    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPersonagens(response.data.results);
      });
  }, []);

  const personagemFiltrado = personagens.find(p => p.name === name);


  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={starWarsBackground} style={styles.background}>
      <View style={styles.container}>
        <Image source={imamgePerson} style={styles.image} />
        <View style={styles.infoContainer}>
          {personagemFiltrado ? (
            <View>
              <Text style={styles.name}> {personagemFiltrado.name}</Text>
            </View>
          ) : (
            <Text style={styles.notFound}>Não encontrado</Text>
          )}
          <Button
            title="Ler mais"
            onPress={() => navigation.navigate('DETALHES', { name, imamgePerson })}
            color="#FFD700"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    width: 330,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    padding: 10,
  },
  image: {
    width: 120,
    height: 110,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    marginLeft: 10,
  },
  name: {
    color: '#FFD700',
    fontSize: 22,
    fontFamily: 'Starjedi', 
    textAlign: 'center',
  },
  notFound: {
    color: '#FF0000',
    fontSize: 18,
    fontFamily: 'Starjedi',
  },
});

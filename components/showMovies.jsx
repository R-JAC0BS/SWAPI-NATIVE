import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground,Button } from 'react-native';
import axios from 'axios';
import starWarss from '../assets/fundo_dois.jpg';

const ShowMovies = ({ name }) => {
    const [personagens, setPersonagens] = useState([]);
    const [movies, setMovie] =useState ([]);
    const [moviesFilter, seMoviesFilter] = useState ([])
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
          .then(response => {
            setPersonagens(response.data.results);
          });
    }, []);
    useEffect(() => {
        if (movies.length > 0) {
            const fetchStarships = async () => {
                const promises = movies.map(url => axios.get(url));
                const responses = await Promise.all(promises);
                seMoviesFilter(responses.map(res => res.data)); 
            };
            fetchStarships();
        }
    }, [movies]);

    const personagemFiltrado = personagens.find(p => p.name === p.name);
    useEffect(() => {
        const personagemFiltrado = personagens.find(p => p.name === p.name);
        if (personagemFiltrado) {
            setMovie(personagemFiltrado.films);
        }
    }, [personagens, name]);


    return (
        <ImageBackground source={starWarss} style = {styles.container} >
            <View style={styles.container}>
                
            {moviesFilter.length > 0 ? (
                <FlatList
                    data={moviesFilter}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.title}>Título: {item.title}</Text>
                            <Text style={styles.text}>Diretor: {item.director}</Text>
                            <Text style={styles.text}>Data de lançamento: {item.release_date}</Text>
                     
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noMoviesText}>CARREGANDO....</Text>
            )}
        </View>
        </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
  
    },
    card: {
        backgroundColor: 'rgba(26, 26, 26, 0.5)', 
        borderRadius: 10,
        borderColor: '#FFD700', 
        borderWidth: 2,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#FFD700',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700', 
        marginBottom: 10,

    },
    text: {
        fontSize: 16,
        color: '#FFFFFF', 
        fontFamily: 'monospace', 
        marginBottom: 5,
    },
    noMoviesText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginTop: 50,
    },
});

export default ShowMovies;

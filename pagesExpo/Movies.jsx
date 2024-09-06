import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,FlatList ,ImageBackground } from 'react-native';
import ShowMovies from '../components/showMovies'
import axios from 'axios';
import starWarss from '../assets/fundo.jpg'

const Movies = ({navigation,route}) => {
    return (
        <ShowMovies name = {route}></ShowMovies>
    )
}


export default Movies;
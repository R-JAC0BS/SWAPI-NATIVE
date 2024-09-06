import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { ShowPerson } from '../components/showPerson';
import starWars from '../assets/lukeSkywalker.jpg';
import starWarss from '../assets/fundo_dois.jpg';
import DarthVader from '../assets/DarthVader.jpg';
import obi from '../assets/obiwan.jpg';
import robo from '../assets/robo3.jpg';
import muie from '../assets/muie.jpg';
import r5d4 from '../assets/r5d4.jpeg'
import beru from '../assets/beru.jpeg'
import Owen from '../assets/Owen.jpg'
import RtDt from '../assets/r2d2.jpeg'
import Bigg from '../assets/Biggs.jpeg'
const HomePage = ({ navigation }) => {
    return (
        <ImageBackground source={starWarss} style={styles.background}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.espacement}>
                    <TouchableOpacity style={styles.buttonNaves} onPress={() => navigation.navigate('Criadores')}>
                        <Text style={styles.buttonText}>Criadores</Text>
                    </TouchableOpacity>
                    <ShowPerson imamgePerson={starWars} name="Luke Skywalker" navigation={navigation} />
                    <ShowPerson imamgePerson={DarthVader} name="Darth Vader" navigation={navigation} />
                    <ShowPerson imamgePerson={obi} name="Obi-Wan Kenobi" navigation={navigation} />
                    <ShowPerson imamgePerson={robo} name="C-3PO" navigation={navigation} />
                    <ShowPerson imamgePerson={muie} name="Leia Organa" navigation={navigation} />
                    <ShowPerson imamgePerson={r5d4} name="R5-D4" navigation={navigation} />
                    <ShowPerson imamgePerson={beru} name="Beru Whitesun lars" navigation={navigation} />
                    <ShowPerson imamgePerson={Owen} name="Owen Lars" navigation={navigation} />
                    <ShowPerson imamgePerson={RtDt} name="R2-D2" navigation={navigation} />
                    <ShowPerson imamgePerson={Bigg} name="Biggs Darklighter" navigation={navigation} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    espacement: {
        gap: 3,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    buttonNaves: {
        backgroundColor: '#FFD700',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 2,
        marginBottom: 10, 
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomePage;

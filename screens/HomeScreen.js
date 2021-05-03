import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { fetchAnime } from '../actions/anime';
import { startQuiz } from '../actions/quiz';

import NavButton from '../components/navbutton';


export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch();

    const handleStart = async () => {
        await dispatch(fetchAnime());
        dispatch(startQuiz('MAL TOP 50'));
        //start quiz
        navigation.navigate('Choice');
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text style={styles.title}>Anime Music Quiz</Text>
                <NavButton title='Start Quiz' onPress={() => handleStart()} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#393E46',
    },
    choices: {
      flex: 1,
      alignItems: 'center',
    },
    navigation: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#00ADB5',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    text: {
      color: '#AAD8D3',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtext: {
      color: '#EEEEEE',
      fontSize: 20,
      textAlign: 'center',
    }
  })
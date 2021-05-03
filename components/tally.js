import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useSelector } from 'react-redux';


export default function Tally(props) {

    const { score, choices } = useSelector((state) => ({ score: state.quizReducer.score, choices: state.quizReducer.choices }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{score}/{choices.length}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#393E46',
    },
    title: {
        color: '#00ADB5',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: '#AAD8D3',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtext: {
        color: '#EEEEEE',
        fontSize: 20
    }
  })
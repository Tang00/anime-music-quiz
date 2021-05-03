import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import NavButton from '../components/navbutton';


export default function ResultScreen({ navigation }) {

    const { quiz, score, choices } = useSelector((state) => ({ quiz: state.quizReducer.quiz, score: state.quizReducer.score, choices: state.quizReducer.choices }));

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>{quiz}</Text>
          <Text style={styles.text}>Your score:</Text>
          <Text style={styles.text}>{score} / {choices.length}</Text>
        </View>

        <View style={styles.choices}>
          <Text style={styles.text}>Your answers:</Text>
          {choices.map((choice, index) => (
            <Text style={styles.subtext} key={index}>{choice}</Text>
          ))}
        </View>

        <View style={styles.navigation}>
          <NavButton title="Start Over" onPress={() => navigation.popToTop()} />
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
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choices: {
    flex: 3,
    flexWrap: 'nowrap',
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
    textAlign: 'center'
  },
  text: {
    color: '#AAD8D3',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtext: {
    color: '#EEEEEE',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
})
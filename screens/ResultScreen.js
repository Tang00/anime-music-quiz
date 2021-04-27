import React from 'react';
import {Button, View, Text} from 'react-native';

import { useSelector } from 'react-redux';


export default function ResultScreen({ navigation }) {

    const { quiz, score, choices } = useSelector((state) => ({ quiz: state.quizReducer.quiz, score: state.quizReducer.score, choices: state.quizReducer.choices }));

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{quiz}</Text>
        <Text>Your score:</Text>
        <Text>{score} / {choices.length}</Text>
        <Text>Your answers:</Text>
        {choices.map((choice, index) => (
          <Text key={index}>{choice}</Text>
        ))}
        <Button title="Start Over" onPress={() => navigation.popToTop()} />
      </View>
    );
}
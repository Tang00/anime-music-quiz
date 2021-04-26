import React from 'react';
import {Button, View, Text} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { fetchAnime } from '../actions/anime';
import { startQuiz } from '../actions/quiz';


export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch();

    const handleStart = async () => {
        await dispatch(fetchAnime());
        dispatch(startQuiz('TOP 200'));
        //start quiz
        navigation.navigate('Choice');
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Anime Music Quiz</Text>
        <Button title='Start Quiz' onPress={() => handleStart()} />
      </View>
    );
}
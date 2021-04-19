import React from 'react';
import {Button, View, Text} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { fetchAnime } from '../actions/anime';


export default function HomeScreen({ navigation }) {

    const { anime, pending, error } = useSelector((state) => ({ anime: state.animelist, pending: state.pending, error: state.error }));
    const dispatch = useDispatch();

    const handleStart = async () => {
        await dispatch(fetchAnime());
        //start quiz
        if (pending === false) {
            navigation.navigate('Choice');
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Anime Music Quiz</Text>
        <Button title="Start Quiz" onPress={() => handleStart()} />
      </View>
    );
}
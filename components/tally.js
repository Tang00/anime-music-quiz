import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';


const tally = () => {

    const { score, choices } = useSelector((state) => ({ score: state.quizReducer.score, choices: state.quizReducer.choices }));

    return (
        <View>
            <Text>{score}/{choices.length}</Text>
        </View>
    )
}


export default tally;
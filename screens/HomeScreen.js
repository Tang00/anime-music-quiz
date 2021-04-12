import React from 'react';
import {Button, View, Text} from 'react-native';


export default function HomeScreen({ navigation }) {

    const handleStart = async () => {
        try {
            //get data for quiz
            let response = await fetch(
                'https://api.jikan.moe/v3/top/anime/1'
            );
            let json = await response.json();

            //start quiz
            navigation.navigate('Choice', { json: json.top })
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Anime Music Quiz</Text>
        <Button title="Start Quiz" onPress={handleStart} />
      </View>
    );
}
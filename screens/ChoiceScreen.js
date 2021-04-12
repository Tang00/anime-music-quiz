import React, { useState }from 'react';
import {  Button, Text, View } from 'react-native';


export default function ChoiceScreen({ navigation }) {
    
    //Will be state variable
    const num = 1;

    //Will be randomly generated from JSON and Jikan API calls
    const choices = ['Demon Slayer','One Piece','Attack on Titan', 'Dragon Ball Z'];

    //Store chosen song and if answer selected was correct in state
    const [choice, setChoice] = useState(0)

    const checkBoxPressHandler = (index) => {
        //Process selection and move to selection screen
        navigation.navigate("Selection");
    }

    return (
        <View>
            {choices.map((answer, index) => (
                <Button key={index} title={answer} onPress={() => {checkBoxPressHandler(index)}} />
            ))}
        </View>
    )
}
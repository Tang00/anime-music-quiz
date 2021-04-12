import React from 'react';
import {Button, View, Text} from 'react-native';

export default function SelectionScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Selection Screen</Text>
        <Button title="Next" onPress={() => navigation.pop()} />
        <Button title="End" onPress={() => navigation.navigate('Result')} />
      </View>
    );
}
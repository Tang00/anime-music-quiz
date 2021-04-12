import React from 'react';
import {Button, View, Text} from 'react-native';


export default function ResultScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Result Screen</Text>
        <Button title="Start Over" onPress={() => navigation.popToTop()} />
      </View>
    );
}
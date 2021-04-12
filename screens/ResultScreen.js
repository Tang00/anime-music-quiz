import React from 'react';
import {Button, View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ResultScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Result Screen</Text>
        <Button title="Start Over" onPress={() => navigation.popToTop()} />
      </View>
    );
}
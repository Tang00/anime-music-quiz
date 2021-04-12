import React from 'react';
import {Button, View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Anime Music Quiz</Text>
        <Button title="Start Quiz" onPress={() => navigation.navigate('Choice')} />
      </View>
    );
}
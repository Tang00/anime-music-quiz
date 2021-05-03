import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';


export default function NavButton(props) {

    return (
        <Pressable 
        style={ ({pressed}) => [
        {
            backgroundColor: pressed ? '#AAD8D3' : '#00ADB5',
        },
        styles.container,
        ]} 
        onPress={props.onPress}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        minWidth: 150,
        margin: 5,
    },
    title: {
        color: '#393E46',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: '#AAD8D3',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtext: {
        color: '#EEEEEE',
        fontSize: 20
    }
  })
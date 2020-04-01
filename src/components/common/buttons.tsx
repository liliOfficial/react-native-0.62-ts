import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface buttonInput {
    text: string;
    onPress?: any;
}

export const BlackButton = (input:buttonInput) => {
    return (
        <TouchableHighlight underlayColor="#eee" onPress={input.onPress}>
            <Text style={[styles.button, styles.blackButton]}>{input.text}</Text>
        </TouchableHighlight>
    )
}

export const OutlineButton = (input:buttonInput) => {
    return (
        <TouchableHighlight underlayColor="#eee" onPress={input.onPress}>
            <Text style={[styles.button, styles.outlineButton]}>{input.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        padding: 15,
        textAlign: 'center',
        borderRadius: 3,
        overflow: 'hidden',
        fontWeight: 'bold'
    },
    blackButton: {
        backgroundColor: '#212121',
    },
    outlineButton: {
        borderColor:'#888',
        color:'#888',
        borderWidth:1,
    },

});
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';

export default function AppHeader(prop: { name: string }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo-name.png')} style={styles.logo} />
            <TouchableHighlight onPress={() => { }} underlayColor="transparent" >
                <Text style={styles.account}>{prop.name}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 12,
        backgroundColor: '#000',
        height: 52,
    },
    logo: {
        width: 125,
        height: 35,
        resizeMode: 'contain',
    },
    account: {
        color: '#fff',
        fontSize: 18,
        paddingTop: 3
    }
});
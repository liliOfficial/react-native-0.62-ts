import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = ({}) => {
    return (
        <Image source={require('../../assets/images/logo-name.png')} style={styles.logo} />
    )
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 30,
        resizeMode: 'contain',
    },
    account: {
        color: '#fff',
        fontSize: 18,
        paddingTop: 3
    }
})
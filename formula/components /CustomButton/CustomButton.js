import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text = "PRIMARY", type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',

        padding: 15,
        paddingTop: 12,

        marginVertical: 5,
        

        alignItems: 'center',
        borderRadius: 5,

        // borderColor: 'blue',
        // borderWidth: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#B6B6B6',
        marginLeft: 40,
        // borderColor: 'blue',
        // borderWidth: 5,
    },

    container_SECONDARY: {
        // borderColor: 'blue',
        // borderWidth: 2,
        width: '35%',
        padding: 10,
        marginLeft: 40,
    },

    container_TERTIARY: {
        width: '41%',
        // borderColor: 'blue',
        // borderWidth: 5,
        marginLeft: 23,
    },

    container_RESETPAGE: {
        width: '41%',
        marginHorizontal: 110,
        // borderColor: 'blue',
        // borderWidth: 5,
    },

    text_RESETPAGE: {
        color: '#B6B6B6',
        fontFamily: 'Blinker',
    },

    text_PRIMARY: {
        fontFamily: 'Blinker',
        color: '#565656',
    },

    text_TERTIARY: {
        color: '#B6B6B6',
        fontFamily: 'Blinker',
    },

    text_SIGNIN: {
        color: '#B6B6B6',
        fontFamily: 'Blinker',
        marginRight: 230
    },

    text_SECONDARY: {
        color: '#B6B6B6',
        fontFamily: 'Blinker',
    }

});

export default CustomButton
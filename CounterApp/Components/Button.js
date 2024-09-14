    // Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

    // Componente reutilizable de botón
    const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4A6B3E',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    });

    export default CustomButton;

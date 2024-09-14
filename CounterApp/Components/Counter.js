import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from './Button'; // Importa el componente del botón

    const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const reiniciar = () => {
        setCount(0);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.counterText}>{count}</Text>
        
        {/* Reemplaza los botones con el componente CustomButton */}
        <CustomButton title="Incrementar" onPress={incrementar} />
        <CustomButton title="Reiniciar" onPress={reiniciar} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counterText: {
        fontSize: 48,
        marginBottom: 20,
    },
    });

    export default Counter;

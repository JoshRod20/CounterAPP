import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Counter = () => {
/**
Este es un estado y el useState es una función
const [count, setCount] = useState(0);, dentro de los corchetes
Siempre habrá una variable y una función que en este caso es count y setCount*/

    const [count, setCount] = useState(0);//Ponemos la variable en un estado y cuando cambia el estado usando useState este se reenderiza

    const incrementar = () => {
    setCount(count + 1);//En esta función de count, se ejecuta el setCount que cambia el valor de la variable en el estado
};//El valor cambia según lo que se ponga en el paréntesis

const reiniciar = () => {
    setCount(count == 0);
}

return (
    <View style={styles.container}>
        <Text style={styles.counterText}>{count}</Text>
        <Button title="Incrementar" onPress={incrementar} />
        <Button title="Reiniciar" onPress={reiniciar} />
    </View>
    );
};

const styles = StyleSheet.create({
container: {
    alignItems: "center",
    justifyContent: "center",
},
counterText: {
    fontSize: 48,
    marginBottom: 10,
},
});

export default Counter;

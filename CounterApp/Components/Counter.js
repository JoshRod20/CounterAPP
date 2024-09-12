import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
    setCount(count + 1);
};

return (
    <View style={styles.container}>
        <Text style={styles.counterText}>{count}</Text>
        <Button title="Incrementar" onPress={incrementar} />
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

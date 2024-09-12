import { useState } from "react-native";

const Counter = () => {
/**
Este es un estado y el useState es una función
const [number, setNumber] = useState(0);, dentro de los corchetes
Siempre habrá una variable y una funcón que en este caso es number y setNumber
 */
    const [count, setCount] = useState(0); //Ponemos la variable en un estado y cunado cambia el estado usando useState este se reenderiza
//
    const incrementar = () => {
        setCount(count + 1);//En esta función de sumar, se ejecuta el setNumber que cambia el valor de la variable en el estado
    }//El valor cambia según lo que se ponga en el paréntesis

    return (
        <View></View>
    )
}

export default Counter;

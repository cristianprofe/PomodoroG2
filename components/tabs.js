import { View, Text, Pressable } from "react-native";

//creo un arreglo de opciones
const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo"];
//Tarea 1 - EL texto del pressable sea opaco
//Tarea 2 - los tabs se vean uno al lado del otro
//Tarea 3 - dar estilos al tabs
const Tabs = (props) => {
  return (
    <View>
      {opciones.map((opcion, index) => (
        <Pressable
          key={index}
          onPress={() => console.log(`Presionaste: ${opcion}`)}
        >
          <Text>{opcion}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tabs;

import { Text, View, StyleSheet } from "react-native";

//es una funcion de js que devuelve una vista

//Tarea 1: formatear el valor del tiempo, para que mueste en minutos en el siguiente formato MM:SS -- EJEMPLO 24:56 -- 05:05
export default function Visor({ tiempo }) {
  //logica del componente - codigo de js

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}>
        {
          //codigo de js
          tiempo
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
});

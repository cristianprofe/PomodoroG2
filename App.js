import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import Titulo from "./components/titulo";
import Visor from "./components/visor";
import Boton from "./components/boton";
import Tabs from "./components/tabs";
import { useState } from "react";

export default function App() {
  //VAMOS A USAR USESTATE PARA MANEJAR LOS ESTADOS DE LA APLICACION - MAS INFO EN https://react.dev/reference/react/useState
  const [tiempo, setTiempo] = useState(25 * 60);
  const [seleccion, setSeleccion] = useState(["OP1" | "OP2" | "OP3"]);
  const [run, setRun] = useState(false);

  const colores = ["#0AF593", "red", "yellow"];

  //TAREA 4
  //IMPLEMENTAR LA FUNCIONALIDAD DEL TEMPORIZADOR UTILIZANDO USEEFFECT Y SETINTERVAL
  //FUNCIONAMIENTO: SI RUN ES VERDADERO USAR INTERVAL PARA MODIFICAR EL VALOR DEL TIEMPO, USAR EL ARREGLO DE DEPENDENCIAS DEL USEEFFECT PARA CORRER EL TIEMPO (RUN, TIEMPO)
  return (
    <View
      style={[
        styles.container,
        Platform.OS === "android" && { paddingTop: 25 },
        { backgroundColor: colores[seleccion] },
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />

        <Titulo titulo="Pomodoro" />
        <Visor tiempo={tiempo} />
        <Boton run={run} setRun={setRun} />
        <Tabs setSeleccion={setSeleccion} seleccion={seleccion} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 10,
  },
});

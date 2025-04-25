import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import Titulo from "./components/titulo";
import Visor from "./components/visor";
import Boton from "./components/boton";
import Tabs from "./components/tabs";
import { useState, useEffect } from "react";
import * as Notifications from "expo-notifications";
import { enviarNotificacion } from "./utility/notificaciones";

export default function App() {
  //VAMOS A USAR USESTATE PARA MANEJAR LOS ESTADOS DE LA APLICACION - MAS INFO EN https://react.dev/reference/react/useState
  const [tiempo, setTiempo] = useState(25 * 60);
  const [seleccion, setSeleccion] = useState("OP1" | "OP2" | "OP3");
  const [run, setRun] = useState(false);

  const colores = ["#F0B16C", "#EA6CF0", "#6CF0CA"];

  const solicitarPermisosNotificaciones = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      if (newStatus !== "granted") {
        console.log("Permiso de notificación denegado");
        return;
      }
    }
    console.log("Permiso de notificación concedido");

    if (Platform.OS === "ios") {
      await Notifications.setNotificationCategoryAsync("default", []);
    }
  };

  //useEffect ->
  useEffect(() => {
    solicitarPermisosNotificaciones();
  }, []);

  useEffect(() => {
    let interval = null;
    if (run) {
      interval = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo - 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setRun(false);
      setTiempo(seleccion === 0 ? 5 * 60 : seleccion === 1 ? 5 * 60 : 15 * 60);
      enviarNotificacion();
    }

    return () => clearInterval(interval);
  }, [run, tiempo]);
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

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import Titulo from "./components/titulo";
import Visor from "./components/visor";
import Boton from "./components/boton";
import Tabs from "./components/tabs";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          Platform.OS === "android" && { paddingTop: 25 },
        ]}
      >
        <Titulo titulo="Pomodoro" />
        <Visor tiempo="tiempo" />
        <Boton />
        <Tabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04D96F",
  },
});

import { View, Text, Pressable, StyleSheet } from "react-native";
//importar la funcion
import playsound from "../utility/playSound";

//tareita: dar estilos al boton
const Boton = (props) => {
  //logica del componente
  //importa el sonido
  const sonido = require("../assets/sound/click.mp3");

  const { run, setRun } = props;
  //llamamos togle por que es cambiar en ingles
  const toggleRun = () => {
    setRun(!run);
    //uso la funcion
    playsound(sonido);
  };

  return (
    <View>
      <Pressable
        onPress={() => toggleRun()}
        style={({ pressed }) => [styles.boton, { opacity: pressed ? 0.5 : 1 }]}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          {run ? "Detener" : "Iniciar"}
        </Text>
      </Pressable>
    </View>
  );
};

//objeto de estilos

const styles = StyleSheet.create({
  boton: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "white",
    marginTop: 10,
    justifyContent: "center",
  },
});

export default Boton;

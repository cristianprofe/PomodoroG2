import { View, Text, Pressable, StyleSheet } from "react-native";

//tareita: dar estilos al boton
const Boton = (props) => {
  //logica del componente

  const { run, setRun } = props;
  //llamamos togle por que es cambiar en ingles
  const toggleRun = () => {
    setRun(!run);
  };
  return (
    <View>
      <Pressable
        onPress={() => toggleRun()}
        style={({ pressed }) => [styles.boton, { opacity: pressed ? 0.5 : 1 }]}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          {
            //Tarea 2: RENDERIZADO CONDICIONAL
            //SI RUN ES VERDADERO MOSTRAR EL TEXTO "PARAR" SI ES FALSO MOSTRAR EL TEXTO "INICIAR"

            "boton"
          }
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

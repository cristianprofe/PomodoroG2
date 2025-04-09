import { Text, View } from "react-native";

//es una funcion de js que devuelve una vista
export default function Visor({ tiempo }) {
  //logica del componente - codigo de js
  return (
    <View>
      <Text>
        {
          //codigo de js
          tiempo
        }
      </Text>
    </View>
  );
}

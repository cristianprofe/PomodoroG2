//funcion reutilizable para reproducir sonido

import { Audio } from "expo-av";

const playSound = async (sonido) => {
  const { sound } = await Audio.Sound.createAsync(sonido);

  await sound.playAsync();
};

export default playSound;

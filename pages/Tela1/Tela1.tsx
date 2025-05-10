import React from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Tela1 = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log("Botão play clicado");
    router.navigate("tela2");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.ImageBackground}
      >
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
        />

        <TouchableOpacity style={styles.play} onPress={handlePress}>
        <AntDesign name="playcircleo" size={80} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 400,
    height: 250,
    resizeMode: "contain"
  },
  play: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    resizeMode:"contain",
  }
});

export default Tela1;

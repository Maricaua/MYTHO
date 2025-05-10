import React from "react";
import { useRouter,router } from "expo-router";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tela5 = () => {
  const router = useRouter();


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.ImageBackground}
      >
      </ImageBackground>

      <Ionicons name="chevron-back" size={24} color="black" /> /* Ajuste */

      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo} />

      <View style={styles.pergunta}>
        <Text style={{color: "#fff", fontSize: 18}}>Qual a região que surgiu o mito da sereia Iara?</Text>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Norte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.texto}>Leste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3}>
        <Text style={styles.texto}>Sul</Text>
      </TouchableOpacity>

      <View style={styles.a} >
        <Text>A</Text>
      </View>
      <View style={styles.b}>
        <Text>B</Text>
      </View>
      <View style={styles.c}>
        <Text>C</Text>
      </View>

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
    width: 80,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  pergunta: {
    backgroundColor: "#4A1194",
    width: "90%",
    height: 170,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 150,
    zIndex: 10,
    left: "5%",

  },
  button: {
    backgroundColor: "#fff",
    width: "70%",
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 360,
    zIndex: 10,
    right: "5%",

  },
  button2: {
    backgroundColor: "#fff",
    width: "70%",
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 450,
    zIndex: 10,
    right: "5%",
  },
  button3: {
    backgroundColor: "#fff",
    width: "70%",
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 540,
    zIndex: 10,
    right: "5%",
  },
  texto: {

  },
  a: {
    backgroundColor: "#fff",
    width: "17%",
    height: 70,
    borderRadius: 80,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 360,
    zIndex: 10,
    left: "4%",

  },

  b: {
    backgroundColor: "#fff",
    width: "17%",
    height: 70,
    borderRadius: 80,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 455,
    zIndex: 10,
    left: "4%",

  },
  c: {
    backgroundColor: "#fff",
    width: "17%",
    height: 70,
    borderRadius: 80,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    position: "absolute",
    shadowOpacity: 0.1,
    top: 540,
    zIndex: 10,
    left: "4%",

  },
  d: {

  }
});

export default Tela5;

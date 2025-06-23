import React from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Tela5RouteProp = RouteProp<RootStackParamList, 'Tela5'>;

const Tela5 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<Tela5RouteProp>();

  const { selectedCasa } = route.params || { selectedCasa: null };

  if (selectedCasa === null) {
    Alert.alert("Erro", "Casa não selecionada. Por favor, volte e escolha uma casa.");
  }

  const handleCorrectAnswer = () => {
    if (selectedCasa !== null) {
      navigation.navigate('Tela6', { selectedCasa: selectedCasa });
    } else {
      Alert.alert("Erro", "A casa selecionada não está disponível. Por favor, reinicie a seleção.");
    }
  };

  const handleIncorrectAnswer = () => {
    if (selectedCasa !== null) {
      navigation.navigate('Tela7', { selectedCasa: selectedCasa });
    } else {
      Alert.alert("Erro", "A casa selecionada não está disponível. Por favor, reinicie a seleção.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.ImageBackground}
      >
        {}
        {selectedCasa !== null && (
          <Text style={styles.selectedCasaText}>Casa Selecionada: {selectedCasa}</Text>
        )}
      </ImageBackground>

      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo} />

      <View style={styles.pergunta}>
        <Text style={{ color: "#fff", fontSize: 18 }}>O que é a Boiuna?</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCorrectAnswer}>
        <Text style={styles.texto}>Uma cobra gigante que vive nos rios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={handleIncorrectAnswer}>
        <Text style={styles.texto}>Uma sereia que encanta os pescadores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={handleIncorrectAnswer}>
        <Text style={styles.texto}>Um espírito da floresta que protege os animais</Text>
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
  selectedCasaText: { 
    position: 'absolute',
    top: 100,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 10,
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

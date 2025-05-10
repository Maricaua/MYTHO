import React from "react";
import { ScrollView, View, StyleSheet, ImageBackground, Image, TextInput, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Link, router } from "expo-router";


const Tela2 = () => (
  <View style={styles.container}>

    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.ImageBackground}>

      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo} />

      <View style={styles.pesquisarContainer}>
        <Icon name="search" size={20} color="#666" style={styles.pesquisarIcon} />
        <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor="#888" />
      </View>

      <Image source={require('../../assets/planta.png')} style={styles.planta} />
      <Text style={styles.texto1}>SEJA BEM VINDO AO MYTHO</Text>
      <Text style={styles.texto2}>Aqui você é livre para explorar e imaginar</Text>

      <Image source={require('../../assets/planta2.png')} style={styles.planta1} />
      <Text style={styles.texto3}>JOGO DE PERGUNTAS</Text>

      <View style={styles.quadrado}>
        <Text style={styles.quadradoText}>MYTHO QUEST</Text>

        <Link href="tela3" asChild>

          <TouchableOpacity style={styles.button} onPress={() => { router.navigate("tela3") }}>
            <Text style={{ color: "#000", fontWeight: 'bold' }}>JOGAR</Text>
          </TouchableOpacity>
        </Link>
        <Image source={require('../../assets/personagens.png')} style={styles.quadradoImagem} />
      </View>

      <Image source={require('../../assets/planta2.png')} style={styles.planta2} />
      <Text style={styles.texto4}>PERGUNTAS</Text>

      <Image source={require('../../assets/planta2.png')} style={styles.planta3} />
      <Text style={styles.texto5}>AUMENTE SEU CONHECIMENTO</Text>

      <Image source={require('../../assets/planta2.png')} style={styles.planta4} />
      <Text style={styles.texto6}>CONHEÇA ALGUMAS LENDAS</Text>

    </ImageBackground>

    <View style={styles.quadrado2}>
      <Text style={styles.quadradoText2}>CASAS ESPECIAIS</Text>
      <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
        <Text style={styles.buttonText2}>JOGAR</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/personagens.png')} style={styles.quadradoImagem2} />
    </View>

    <TouchableOpacity style={styles.button3} activeOpacity={0.7}>
      <Text style={styles.buttonText3}>O QUE É O FOLCLORE?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button4} activeOpacity={0.7}>
      <Text style={styles.buttonText4}>CURIOSIDADES</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button5} activeOpacity={0.7}>
      <Text style={styles.buttonText5}>FESTAS E TRADIÇÕES</Text>
    </TouchableOpacity>







  </View >

);


const styles = StyleSheet.create({
  container: {              /* primeiro componente , organiza o background*/
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {        /* segundo componente, background*/
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {       /* terceiro componente, logo*/
    width: 80,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  pesquisarContainer: {  /* quarto componente, tamanho do pesquisar*/
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    width: "90%",
    height: 40,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    position: 'absolute',
    top: 120,
    zIndex: 100,
    pointerEvents: 'auto',

  },
  pesquisarIcon: {
    marginRight: 10,
  },
  input: { /* primeiro componente, botao jogar do primeiro quadrado*/
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  input2: { /* primeiro componente, botao jogar do primeiro quadrado*/
    flex: 1,
    fontSize: 16,
    color: "#c1ff72",
  },
  texto1: {
    position: "absolute",
    top: 190,
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  texto2: {
    position: "absolute",
    top: 220,
    width: "90%",
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    fontWeight: "100",
  },
  texto3: {
    position: "absolute",
    top: 260,
    width: "90%",
    textAlign: "left",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 30,
  },
  texto4: {
    position: "absolute",
    top: 510,
    width: "90%",
    textAlign: "left",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 40,

  },
  texto5: {
    position: "absolute",
    top: 760,
    width: "90%",
    textAlign: "left",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 40,
  },
  texto6: {
    position: "absolute",
    top: 900,
    width: "90%",
    textAlign: "left",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 40,
  },
  planta: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 180,
    alignSelf: "flex-start",
    paddingLeft: 110,
  },
  planta1: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 250,
    alignSelf: "flex-start",
    paddingLeft: 60,
  },
  planta2: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 500, /*mudar a altura das folhas */
    alignSelf: "flex-start",
    paddingLeft: 70,
  },
  planta3: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 750, /*mudar a altura das folhas */
    alignSelf: "flex-start",
    paddingLeft: 70,
  },
  planta4: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 750, /*mudar a altura das folhas */
    alignSelf: "flex-start",
    paddingLeft: 70,
  },
  quadrado: {
    backgroundColor: "#FFF0B6",
    borderRadius: 20,
    width: "90%",
    height: 170,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.1,
    position: 'absolute',
    top: 280,
    zIndex: 10,
  },
  quadrado2: {
    backgroundColor: "#6E2CC3",
    borderRadius: 20,
    width: "90%",
    height: 170,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.1,
    position: 'absolute',
    top: 540,
    zIndex: 10,
  },
  quadradoText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
    fontWeight: "900",
    top: 40,
    textAlign: 'left',
    position: 'absolute',
    width: '100%',
    paddingLeft: 20,
  },
  quadradoText2: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "900",
    top: 40,
    textAlign: 'left',
    position: 'absolute',
    width: '100%',
    paddingLeft: 20,
  },

  quadradoImagem: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    position: "absolute",
    top: 10,
    alignSelf: "flex-end",
    paddingLeft: 250,

  },
  quadradoImagem2: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    position: "absolute",
    top: 10,
    alignSelf: "flex-end",
    paddingLeft: 250,

  },

  button: {
    position: "absolute",
    top: 70,
    left: 20,
    backgroundColor: "#C1FF72",
    paddingVertical: 10,
    paddingLeft: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
    width: 130,
    height: 30,

  },
  button2: {
    position: "absolute",
    top: 70,
    left: 30,
    backgroundColor: "#c1ff72",
    paddingVertical: 10,
    paddingLeft: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
    width: 130,
    height: 30,

  },
  button3: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "45%",
    height: 50,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 790,
    zIndex: 10,
    left: 15,

  },
  button4: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "45%",
    height: 50,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 790,
    zIndex: 10,
    left: 210,

  },
  button5: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "45%",
    height: 50,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 850,
    zIndex: 10,
    left: 15,
  },
  button6: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "45%",
    height: 50,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 850,
    zIndex: 10,
    left: 210,
  },
  buttonText: {
    position: 'absolute',
    top: 1,
    fontSize: 20,
    fontFamily: "700",
    width: "100%",
    paddingLeft: 36,
    color: "#000",

  },
  buttonText2: {
    position: 'absolute',
    top: 1,
    fontSize: 20,
    fontFamily: "700",
    width: "100%",
    paddingLeft: 36,
    color: "#000"

  },
  buttonText3: {


  },
  buttonText4: {


  },
  buttonText5: {

  },
  buttonText6: {

  },



});

export default Tela2;

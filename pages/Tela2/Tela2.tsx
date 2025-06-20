import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { View, StyleSheet, ImageBackground, Image, TextInput, Text, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../../App";
import VitoriaRegia from "../VitoriaRegia/VitoriaRegia";
import Curupira from "../Curupira/Curupira";

const Tela2 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logoScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const textOpacity = scrollY.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [250, 170],
    extrapolate: 'clamp',
  });

  const logoTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.ImageBackground}>

        <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
          <Animated.Image
            source={require('../../assets/Logo.png')}
            style={[
              styles.logo,
              {
                transform: [
                  { scale: logoScale },
                  { translateY: logoTranslateY }
                ]
              }
            ]} />

          <View style={styles.pesquisarContainer}>
            <Icon name="search" size={20} color="#666" style={styles.pesquisarIcon} />
            <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor="#888" />
          </View>

          <Animated.View style={{ opacity: textOpacity, position: 'absolute', top: 180, width: '100%', alignItems: 'center' }}>
            <Text style={styles.texto1}>SEJA BEM VINDO AO MYTHO</Text>
            <Text style={styles.texto2}>Aqui você é livre para explorar e imaginar</Text>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          style={[styles.scrollView, { marginTop: headerHeight }]}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={{ width: '100%' }}>
            <View style={styles.rowContainer}>
              <Image source={require('../../assets/planta2.png')} style={styles.planta1} />
              <Text style={styles.texto3}>JOGO DE PERGUNTAS</Text>
            </View>

            <View style={styles.quadrado}>
              <Text style={styles.quadradoText}>MYTHO QUEST</Text>

              <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('Tela10')}>
                <Text style={styles.buttonText}>JOGAR</Text>
              </TouchableOpacity>
              <Image source={require('../../assets/personagens.png')} style={styles.quadradoImagem} />
            </View>

            <View style={styles.rowContainer}>
              <Image source={require('../../assets/planta2.png')} style={styles.planta2} />
              <Text style={styles.texto4}>PERGUNTAS</Text>
            </View>

            <View style={styles.quadrado2}>
              <Text style={styles.quadradoText2}>CASAS ESPECIAIS</Text>
              <TouchableOpacity style={styles.button2} activeOpacity={0.7} onPress={() => navigation.navigate('Tela3')}>
                <Text style={styles.buttonText2}>JOGAR</Text>
              </TouchableOpacity>
              <Image source={require('../../assets/personagens.png')} style={styles.quadradoImagem2} />
            </View>

            <View style={styles.rowContainer}>
              <Image source={require('../../assets/planta2.png')} style={styles.planta3} />
              <Text style={styles.texto5}>AUMENTE SEU CONHECIMENTO</Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button3} activeOpacity={0.7} onPress={() => navigation.navigate('Tela4')}>
                <Image source={require('../../assets/item.png')} style={styles.image}/>
                <Text style={styles.buttonText3}>O QUE É O FOLCLORE?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button4} activeOpacity={0.7} onPress={() => navigation.navigate('Tela11')}>
                <Text style={styles.buttonText4}>CURIOSIDADES</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button5} activeOpacity={0.7} onPress={() => navigation.navigate('Tela12')}>
              <Text style={styles.buttonText5}>FESTAS E TRADIÇÕES</Text>
            </TouchableOpacity>

            <View style={styles.rowContainer}>
              <Image source={require('../../assets/planta2.png')} style={styles.planta4} />
              <Text style={styles.texto6}>CONHEÇA ALGUMAS LENDAS</Text>
            </View>

            <View style={styles.legendGrid}>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Iara')}>
                <Image source={require('../../assets/iara2.png')} style={styles.image} />                
                <View style={styles.nameBox}>
                  <Text style={styles.nameText}>IARA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Saci')}>
                <Image source={require('../../assets/saci5.png')} style={styles.image} />
                <View style={styles.nameBoxRed}>
                  <Text style={styles.nameText}>SACI</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cuca')}>
                <Image source={require('../../assets/cuca.png')} style={styles.image} />
                <View style={styles.nameBoxGreen1}>
                  <Text style={styles.nameText}>CUCA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Boitata')}>
                <Image source={require('../../assets/boitata.png')} style={styles.image} />
                <View style={styles.nameBoxGreen2}>
                  <Text style={styles.nameText}>BOITATÁ</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Boto')}>
                <Image source={require('../../assets/boto.png')} style={styles.image} />
                <View style={styles.nameBoxPink}>
                  <Text style={styles.nameText}>BOTO COR DE ROSA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Mula')}>
                <Image source={require('../../assets/mula.png')} style={styles.image} />
                <View style={styles.nameBoxOrange}>
                  <Text style={styles.nameText}>MULA SEM CABEÇA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('VitoriaRegia')}>
                <Image source={require('../../assets/vitoriaregia.png')} style={styles.image} />
                <View style={styles.nameBoxGreen3}>
                  <Text style={styles.nameText}>VITÓRIA RÉGIA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Curupira')}>
                <Image source={require('../../assets/curupira.png')} style={styles.image} />

                <View style={styles.nameBoxRed2}>
                  <Text style={styles.nameText}>CURUPIRA</Text>
                </View>
              </TouchableOpacity>

            </View>



            <View style={{ height: 50 }} />
          </View>
        </Animated.ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    alignItems: 'center',
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 80,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  pesquisarContainer: {
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  input2: {
    flex: 1,
    fontSize: 16,
    color: "#c1ff72",
  },
  texto1: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  texto2: {
    width: "90%",
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    fontWeight: "100",
    marginTop: 5,
  },
  texto3: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  texto4: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  texto5: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  texto6: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  planta1: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  planta2: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  planta3: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  planta4: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    top: 5,
  },
  quadrado: {
    backgroundColor: "#FFF0B6",
    borderRadius: 20,
    width: "100%",
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.1,
    position: 'relative',
    marginTop: 10,
  },
  quadrado2: {
    backgroundColor: "#6E2CC3",
    borderRadius: 20,
    width: "100%",
    height: 170,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.1,
    position: 'relative',
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
    width: 180,
    height: 150,
    resizeMode: "contain",
    position: "absolute",
    top: 10,
    right: 10,
  },
  quadradoImagem2: {
    width: 180,
    height: 150,
    resizeMode: "contain",
    position: "absolute",
    top: 10,
    right: 10,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button3: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "48%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
  },
  button4: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "48%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
  },
  button5: {
    backgroundColor: "#fff0b6",
    borderRadius: 13,
    width: "100%",
    height: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOpacity: 0.4,
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  buttonText4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  buttonText5: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  card: {
    width: '47%',
    height: 180,
    backgroundColor: '#FFF3DC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignItems: "center",
  },

  nameBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FF63C3',
    paddingVertical: 10,
    alignItems: 'center',
  },

  nameBoxRed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E4443C',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxGreen1: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#526F2C',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxGreen2: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#91A23F',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxPink: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FF00E6',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxOrange: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FF8A36',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxGreen3: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#449B24',
    paddingVertical: 10,
    alignItems: 'center',
  },
  nameBoxRed2: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FF3636',
    paddingVertical: 10,
    alignItems: 'center',
  },

  nameText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },


});

export default Tela2;
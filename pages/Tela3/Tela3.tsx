import React from "react";
import { View, Image, Text, FlatList, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const casas = [5, 15, 25];

export default function Tela3() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.background}
      >
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />

        <FlatList
          data={casas}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          contentContainerStyle={styles.cardList}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Tela5")}
            >
              {/* Estrelinha */}
              <Image source={require('../../assets/star.png')} style={styles.star} />

              <Text style={styles.cardTitle}>CASA</Text>
              <Text style={styles.cardNumber}>{item}</Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Tela2')}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />

        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 0,
    padding: 10,
    zIndex: 1,

  },
  cardList: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FFF0B6',
    width: '48%',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardNumber: {
    fontSize: 28,
    color: '#673ab7',
    fontWeight: '900',
  },
  star: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: -10,
    right: -10,
  },

});

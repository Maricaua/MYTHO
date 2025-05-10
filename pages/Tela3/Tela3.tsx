import React from "react";
import { View, Image, Text, FlatList, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const casas = [5, 15, 25];

export default function Tela3() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.background}
      >
        {/* Logo */}
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />

        {/* Cards das casas */}
        <FlatList
          data={casas}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          contentContainerStyle={styles.cardList}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.navigate("Tela5")}
            >
              {/* Estrelinha */}
              <Image source={require('../../assets/star.png')} style={styles.star} />

              <Text style={styles.cardTitle}>CASA</Text>
              <Text style={styles.cardNumber}>{item}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.back}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </View>

        <View style={styles.home}>
          <Entypo name="home" size={24} color="black" />
        </View>


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
    width: 50,
    marginTop:50,  
  },
  home: {
    alignItems: 'flex-end',
    marginTop:50,

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

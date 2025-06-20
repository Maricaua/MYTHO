import React from "react";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../App";

const Tela1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

        <TouchableOpacity style={styles.play} onPress={() => navigation.navigate('Tela2')}>
          <AntDesign name="playcircleo" size={80} color="#C1FF72" />

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
  }
});

export default Tela1;

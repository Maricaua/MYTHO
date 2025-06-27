import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tela14 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/Background.png')}
                style={styles.ImageBackground}
            >


                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo} />

                <Image
                    source={require('../../assets/prenda.png')}
                    style={styles.prenda} />


                <TouchableOpacity
                    style={styles.continuar} onPress={() => navigation.navigate('Tela2')}>
                    <Text style={styles.texto}>Continuar</Text>
                </TouchableOpacity>

              {/*  <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Tela2')}>
                    <Ionicons name="arrow-back-outline" size={30} color="white" />

                </TouchableOpacity>*/}

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
        width: 80,
        height: 70,
        resizeMode: "contain",
        position: "absolute",
        top: 40,
        alignSelf: "center",
    },
    prenda: {
        alignSelf: "center",
        top: 250,
        position: "absolute",
        resizeMode: "contain",
        width: 260,
    },
    continuar: {
        backgroundColor: "#930100",
        width: "80%",
        height: 50,
        marginTop: 20,
        
        borderRadius: 115,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        position: "absolute",
        shadowOpacity: 0.1,
        top: 670,
        zIndex: 10,
        left: "10%",

    },
    texto: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    back: {
        position: 'absolute',
        left: 20,
        top: 0,
        padding: 10,
        marginTop: 15,
        zIndex: 1,
    },

});

export default Tela14;

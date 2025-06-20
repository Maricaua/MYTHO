import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Boitata = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.superior} />


            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}

            />
            <Image
                source={require('../../assets/boitata.png')}
                style={styles.boitata}

            />

            <Text style={styles.texto1}>BOITATA</Text>
            <Text style={styles.texto2}>A lenda do Boitatá conta sobre uma cobra de fogo que protege as florestas e campos do Brasil. Ela aparece à noite, com seus olhos brilhantes, principalmente após incêndios, para defender a natureza de quem a destrói.</Text>
            <Text style={styles.texto3}>ORIGEM</Text>
            <Text style={styles.texto4}>O nome "Boitatá" vem do tupi-guarani: "mboi" (cobra) + "tatá" (fogo), ou seja, "cobra de fogo". A lenda tem origem indígena e é uma das mais antigas do Brasil, tendo sido registrada já no século XVI.</Text>
            <Text style={styles.texto5}>CURIOSIDADE</Text>
            <Text style={styles.texto6}>Dizem que quem olha diretamente para o Boitatá pode ficar cego ou enlouquecido, por causa da força da sua luz flamejante.</Text>
            <Text style={styles.texto7}>REGIÃO</Text>
            <Text style={styles.texto8}>Sul</Text>


            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Tela2')}>
                <Ionicons name="arrow-back-outline" size={30} color="white" />

            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        position: "absolute",
        top: 30,
        alignSelf: "center",

    },
    superior: {
        backgroundColor: "#91A23F",
        width: "250%",
        height: 250,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        shadowOpacity: 0.1,

    },
    boitata: {
        width: 210,
        height: 210,
        resizeMode: "contain",
        position: "absolute",
        top: 120,
        alignSelf: "center",

    },
    back: {
        position: 'absolute',
        left: 20,
        top: 0,
        padding: 10,
        marginTop: 15,
        zIndex: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    texto1: {
        fontWeight: "bold",
        color: "#91A23F",
        top: 50,
        fontSize: 20,
        marginLeft: 10,
    },
    texto2: {
        top: 60,
        marginLeft: 10,
        marginRight: 10,

    },
    texto3: {
        fontWeight: "bold",
        color: "#91A23F",
        top: 70,
        fontSize: 20,
        marginLeft: 10,

    },
    texto4: {
        top: 80,
        marginLeft: 10,
        marginRight: 150,

    },
    texto5: {
        fontWeight: "bold",
        color: "#91A23F",
        top: 90,
        fontSize: 20,
        marginLeft: 10,

    },
    texto6: {
        top: 100,
        marginLeft:10,


    },
    texto7: {
        fontWeight:"bold",
        color:"#91A23F",
        fontSize: 20,
        top: 120,
        marginLeft: 10,
    },
    texto8:{
        top:120,
        marginLeft:10,


    }

});

export default Boitata;
import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Mula = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.superior} />


            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}

            />
            <Image
                source={require('../../assets/mula.png')}
                style={styles.mula}

            />

            <Text style={styles.texto1}>MULA SEM CABEÇA</Text>
            <Text style={styles.texto2}>A Mula Sem Cabeça é uma lenda do folclore brasileiro que conta a história de uma mulher amaldiçoada por seu pecado, geralmente por ter tido um romance com um padre ou homem casado. Ela é transformada em uma mula sem cabeça, com uma crina de fogo e cavalgando furiosa à noite, espalhando pavor e destruição por onde passa.</Text>
            <Text style={styles.texto3}>ORIGEM</Text>
            <Text style={styles.texto4}>Acredita-se que essa lenda tenha vindo da Europa, trazida pelos portugueses durante a colonização. Seu surgimento está relacionado à forte influência cristã e ao conceito de pecado e punição.</Text>
            <Text style={styles.texto5}>CURIOSIDADE</Text>
            <Text style={styles.texto6}>Curiosidade: Dizem que ouvir os cascos da Mula Sem Cabeça à noite sem rezar pode trazer maldições, como doenças ou até a morte.</Text>
            <Text style={styles.texto7}>REGIÃO</Text>
            <Text style={styles.texto8}>Norte,Nordeste,Centro-Oeste</Text>


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
        backgroundColor: "#FF8A36",
        width: "250%",
        height: 250,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        shadowOpacity: 0.1,

    },
    mula: {
        width: 180,
        height: 180,
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
        color: "#FF8A36",
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
        color: "#FF8A36",
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
        color: "#FF8A36",
        top: 90,
        fontSize: 20,
        marginLeft: 10,

    },
    texto6: {
        top: 100,
        marginLeft:10,
        marginRight: 10,

    },
    texto7: {
        fontWeight:"bold",
        color:"#FF8A36",
        fontSize: 20,
        top: 120,
        marginLeft: 10,
    },
    texto8:{
        top:120,
        marginLeft:10,
    }

});

export default Mula;
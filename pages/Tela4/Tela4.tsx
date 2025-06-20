import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Tela4 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground}>

                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}

                />
                <Image
                    source={require('../../assets/cobra.jpg')}
                    style={styles.cobra}

                />
                <Image
                    source={require('../../assets/planta.png')}
                    style={styles.planta1} />


                <Text style={styles.texto1}>O QUE É FOLCLORE?</Text>
                <Text style={styles.texto2}>O foloclore brasileiro é o conjunto de manifestações culturais populares que refletem a identidade social e cultural do país. Ele abrange uma variedade de expressões, como mitos, lendas, contos populares, ritos, cerimônias religiosas e sociais, brincadeiras, provérbios, adivinhações, músicas, danças, culinária típica e artesanato.</Text>
                <Text style={styles.texto3}>IMPORTÂNCIA DO FOLCLORE NA CULTURA BRASILEIRA</Text>
                <Text style={styles.texto4}>O folclore é muito importante para a cultura do Brasil,porque ele guarda tudo que o povo inventou, contou e passou de geração. Ele é feito de histórias, músicas, danças, festas, comidas, brincadeiras e personagens que mostram como o povo brasileiro vive, sente e pensa.</Text>
                <Text style={styles.texto5}>FOLCLORE EM OUTRAS REGIÕES</Text>
                <Text style={styles.texto6}>Conheça o folclore em algumas regiões do Brasil</Text>


                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Tela2')}>
                    <Ionicons name="arrow-back-outline" size={30} color="white" />

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
        alignItems: 'center',
        backgroundColor: "#084049",
    },
    logo: {
        width: 80,
        height: 70,
        resizeMode: "contain",
        position: "absolute",
        top: 40,
        alignSelf: "center",
    },
    back: {
        position: 'absolute',
        left: 20,
        top: 0,
        padding: 15,
        zIndex: 1,
    },
    cobra: {
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 110,
        alignSelf: "flex-end",
        paddingLeft: 45,

    },
    planta1: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 555, /*mudar a altura das folhas */
        alignSelf: "flex-start",
        paddingLeft: 110,

    },
    texto1: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        paddingLeft: 300,
        alignSelf: "center",
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 150,

    },
    texto2: {
        color: "#fff",
        fontSize: 12,
        paddingLeft: 210,
        paddingRight: 10,
        alignSelf: "flex-start",
        resizeMode: "contain",
        position: "absolute",
        top: 185,

    },
    texto3: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18,
        paddingLeft: 50,
        alignSelf: "flex-start",
        resizeMode: "contain",
        position: "absolute",
        top: 400,

    },
    texto4: {
        color: "#fff",
        fontSize: 12,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 455,


    },
    texto5: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18,
        paddingLeft: 30,
        alignItems: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 565,
    },
    texto6: {
        fontFamily: "bold",
        color: "#fff",
        fontSize: 15,
        paddingLeft: 20,
        alignItems: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 599,
    },/*
    norte: {
        width: 20,
        height: 20,
        color: "#FFF0B6",
        alignItems: "center",
        justifyContent: "center",

    },
    nordeste: {
        width: 20,
        height: 20,
        color: "#FFF0B6",
        alignItems: "center",
        justifyContent: "center",

    },
    centroOeste: {
        width: 20,
        height: 20,
        color: "#FFF0B6",
        alignItems: "center",
        justifyContent: "center",

    },
    sudeste: {
        width: 20,
        height: 20,
        color: "#FFF0B6",
        alignItems: "center",
        justifyContent: "center",

    },
    sul: {
        width: 20,
        height: 20,
        color: "#FFF0B6",
        alignItems: "center",
        justifyContent: "center",

    },
    
    <ScrollView horizontal>
                    <View style={styles.norte} />
                    <View style={styles.nordeste} />
                    <View style={styles.centroOeste} />
                    <View style={styles.sudeste} />
                    <View style={styles.sul} />
                </ScrollView>
    
    
    */


});

export default Tela4;
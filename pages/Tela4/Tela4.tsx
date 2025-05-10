import React from "react";
import { View, StyleSheet, ImageBackground, Image, TextInput, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Tela4 = () => (
    <View style={styles.container}>
        <ImageBackground
           source={require('../../assets/Background.png')}
            style={styles.ImageBackground}
        >


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
            <View style={styles.pesquisarContainer}>
                <Icon name="search" size={20} color="#666" style={styles.pesquisarIcon} />
                <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor="#888" />
            </View>

        </ImageBackground>

    </View>
);

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
    pesquisarIcon: {   /* quinto componente, icone do pesquisar*/
        marginRight: 10,
    },
    input: { /* primeiro componente, botao jogar do primeiro quadrado*/
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    cobra: {
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 200,
        alignSelf: "flex-end",
        paddingLeft: 45,

    },
    planta1: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 550, /*mudar a altura das folhas */
        alignSelf: "flex-start",
        paddingLeft: 180,


    },
    texto1: {
        fontFamily: "bold",
        color: "#fff",
        fontSize: 25,
        paddingLeft: 300,
        alignSelf: "center",
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 210,

    },
    texto2: {
        color: "#fff",
        fontSize: 12,
        paddingLeft: 210,
        paddingRight: 10,
        alignSelf: "flex-start",
        resizeMode: "contain",
        position: "absolute",
        top: 250,

    },
    texto3: {
        fontFamily: "bold",
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
        top: 450,


    },
    texto5: {
        fontFamily: "bold",
        color: "#fff",
        fontSize: 18,
        paddingLeft: 35,
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
        top: 590,
    },

});

export default Tela4;
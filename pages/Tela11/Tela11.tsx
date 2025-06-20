import React from "react";
import { View, StyleSheet, ImageBackground, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { ScrollView } from "react-native-gesture-handler";

const Tela11 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.ImageBackground}
            >

                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}

                />
                <Image
                    source={require('../../assets/saci4.png')}
                    style={styles.saci}

                />
                <Image
                    source={require('../../assets/planta.png')}
                    style={styles.planta1} />

                <Image
                    source={require('../../assets/planta.png')}
                    style={styles.planta2} />

                <Image
                    source={require('../../assets/planta.png')}
                    style={styles.planta3} />

                <Text style={styles.texto1}>CURIOSIDADES DO FOLCLORE</Text>
                <Text style={styles.texto2}>Você sabia que existe um dia só pro folclore</Text>
                <Text style={styles.texto3}>O Dia do Folclore Brasileiro é comemorado em 22 de agosto. Essa data foi escolhida porque, em 1846, a palavra “folclore” (que vem do inglês folk-lore, e significa “sabedoria popular”) foi usada pela primeira vez para falar sobre os costumes e tradições de um povo. No Brasil, essa data passou a ser oficial em 1965, para valorizar e preservar a nossa cultura popular.</Text>
                <Text style={styles.texto4}>Você sabia que dia 31 de Outubro é dia do Saci?</Text>
                <Text style={styles.texto5}>Em 2005, foi criado o Dia do Saci, que é comemorado no dia 31 de Outubro. A data foi escolhida para ser um jeito de valorizar o nosso folclore, principalmente o Saci, e também para fazer um contraste com o Halloween, que é uma festa influenciada dos Estados Unidos.Assim, podemos comemorar nossas próprias tradições de uma forma bem divertida! </Text>
                <Text style={styles.texto6}>Lendas para ensinar</Text>
                <Text style={styles.texto7}></Text>




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
        backgroundColor: "#526F2C"

    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        position: "absolute",
        top: 30,
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
    back: {
        position: 'absolute',
        left: 20,
        top: 0,
        padding: 10,
        marginTop: 15,
        zIndex: 1,
    },
    pesquisarIcon: {  
        marginRight: 10,
    },
    input: { 
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    saci: {
        width: 600,
        height: 150,
        resizeMode: "contain",
        position: "absolute",
        top: 325,
        alignSelf: "flex-start",
        paddingRight: 10,

    },
    planta1: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 130, /*mudar a altura das folhas */
        alignSelf: "flex-start",
        paddingLeft: 60,

    },
    planta2: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 290, /*mudar a altura das folhas */
        alignSelf: "flex-start",
        paddingLeft: 60,

    },
     planta3: {
        width: 40,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 480, /*mudar a altura das folhas */
        alignSelf: "flex-start",
        paddingLeft: 65,

    },
    texto1: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        paddingLeft: 155,
        alignSelf: "center",
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 100,

    },
    texto2: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        paddingLeft: 155,
        alignSelf: "center",
        width: 600,
        height: 200,
        resizeMode: "contain",
        position: "absolute",
        top: 150,

    },
    texto3: {
        color: "#fff",
        fontSize: 10,
        margin: 10,
        alignSelf: "center",
        paddingLeft: 20,
        resizeMode: "contain",
        position: "absolute",
        top: 170,

    },
    texto4: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        paddingLeft: 50,
        paddingRight: 30,
        alignSelf: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 300,


    },
    texto5: {
        color: "#fff",
        fontSize: 10,
        paddingLeft: 30,
        paddingRight: 140,
        alignItems: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 350,
    },
    texto6: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",
        resizeMode: "contain",
        position: "absolute",
        top: 490,
        paddingRight:140,
    },
    texto7: {



    },

});

export default Tela11;
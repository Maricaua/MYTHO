import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Curupira = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.superior} />


            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}

            />
            <Image
                source={require('../../assets/curupira.png')}
                style={styles.curupira}

            />

            <Text style={styles.texto1}>CURUPIRA</Text>
            <Text style={styles.texto2}>O Curupira é um ser mítico que protege as florestas, confundindo caçadores e lenhadores com seus rastros e assobios. Ele é descrito como um menino pequeno, ágil, com cabelos vermelhos e pés virados para trás, e pune aqueles que destroem a natureza sem necessidade. Embora misterioso e assustador, não é considerado malvado, mas sim protetor da floresta.</Text>
            <Text style={styles.texto3}>ORIGEM</Text>
            <Text style={styles.texto4}>Lenda originária dos povos indígenas brasileiros, sendo uma das mais antigas do folclore nacional. Seu nome vem do tupi-guarani e significa algo como "corpo de menino.</Text>
            <Text style={styles.texto5}>CURIOSIDADE</Text>
            <Text style={styles.texto6}>O Curupira tem os pés virados para trás, o que confunde aqueles que tentam segui-lo, fazendo-os se perder na floresta.</Text>
            <Text style={styles.texto7}>REGIÃO</Text>
            <Text style={styles.texto8}>Norte</Text>


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
        backgroundColor: "#FF3636",
        width: "250%",
        height: 250,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        shadowOpacity: 0.1,

    },
    curupira: {
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
        color: "#FF3636",
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
        color: "#FF3636",
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
        color: "#FF3636",
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
        color:"#FF3636",
        fontSize: 20,
        top: 120,
        marginLeft: 10,
    },
    texto8:{
        top:120,
        marginLeft:10,


    }

});

export default Curupira;
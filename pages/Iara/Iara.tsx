import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Iara = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.superior} />


            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}

            />
            <Image
                source={require('../../assets/iara2.png')}
                style={styles.iara}

            />

            <Text style={styles.texto1}>SEREIA IARA</Text>
            <Text style={styles.texto2}>Iara é uma sereia do folclore brasileiro, com corpo metade mulher e metade peixe. Possui grande beleza, cabelos longos e uma voz encantadora, usada para atrair homens para o fundo dos rios. Vive nas águas da Amazônia.</Text>
            <Text style={styles.texto3}>ORIGEM</Text>
            <Text style={styles.texto4}>Versão indígena da origem (mais antiga e tradicional no Brasil): Conta que Iara era uma jovem indígena, filha de um pajé e uma guerreira muito habilidosa. Por inveja, seus irmãos tentaram matá-la, mas ela se defendeu e os matou. Por isso, foi punida e jogada no rio, onde os espíritos da natureza a transformaram em uma sereia, a "mãe d’água".</Text>
            <Text style={styles.texto5}>CURIOSIDADE</Text>
            <Text style={styles.texto6}>Segundo a lenda, os homens que são encantados pela Iara muitas vezes desaparecem nos rios, e os que conseguem escapar ficam confusos, como se estivessem enfeitiçados, sem lembrar do que aconteceu.</Text>
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
        backgroundColor: "#b24487",
        width: "250%",
        height: 250,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        shadowOpacity: 0.1,

    },
    iara: {
        width: 220,
        height: 220,
        resizeMode: "contain",
        position: "absolute",
        top: 120,
        alignSelf: "center",

    },
    back: {
        position: 'absolute',
        left: 15,
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
        color: "#b24487",
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
        color: "#b24487",
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
        color: "#b24487",
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
        color:"#b24487",
        fontSize: 20,
        top: 120,
        marginLeft: 10,
    },
    texto8:{
        top:120,
        marginLeft:10,


    }

});

export default Iara;
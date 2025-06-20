import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const VitoriaRegia = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.superior} />


            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}

            />
            <Image
                source={require('../../assets/vitoriaregia.png')}
                style={styles.VitoriaRegia}

            />

            <Text style={styles.texto1}>VITÓRIA RÉGIA</Text>
            <Text style={styles.texto2}>O mito da Vitória-Régia conta a história de Naómi, uma linda índia da Amazônia que se apaixonou por um guerreiro. No entanto, ele não correspondeu ao seu amor. Desesperada e envergonhada, ela se jogou no rio. Os deuses, tocados pela sua dor, a transformaram em uma flor aquática, que passou a florescer nas águas escuras da Amazônia, a Vitória-Régia.</Text>
            <Text style={styles.texto3}>ORIGEM</Text>
            <Text style={styles.texto4}>A lenda da Vitória-Régia surgiu entre os povos indígenas da Amazônia como uma explicação mística para a origem da planta. Ela simboliza a conexão dos indígenas com a natureza, além de representar a beleza e força da Amazônia. A flor, com suas grandes flores que se abrem à noite e fecham durante o dia, tornou-se um ícone da região.</Text>
            <Text style={styles.texto5}>CURIOSIDADE</Text>
            <Text style={styles.texto6}>a lenda da Vitória-Régia, diz-se que a flor só abre à noite, como se estivesse chorando pela tristeza de Naómi, a índia que se transformou nela por causa de seu amor não correspondido.</Text>
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
        backgroundColor: "#449B24",
        width: "250%",
        height: 250,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        shadowOpacity: 0.1,

    },
    VitoriaRegia: {
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
        color: "#449B24",
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
        color: "#449B24",
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
        color: "#449B24",
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
        color:"#449B24",
        fontSize: 20,
        top: 120,
        marginLeft: 10,
    },
    texto8:{
        top:120,
        marginLeft:10,


    }

});

export default VitoriaRegia;
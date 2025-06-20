import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text, FlatList, TouchableOpacity, } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from "@react-navigation/native";

interface QuadradoData {
    id: string;
    cor: string;
    imagem: any;
    nome: string;
}

const quadradosData = [
    { id: "1", cor: "#FFF0B6", imagem: require("../../assets/lobo.png"), nome: "Imite um personagem de folclore" },
    { id: "2", cor: "#FFF0B6", imagem: require("../../assets/saci.png"), nome: "Volte três casas" },
    { id: "3", cor: "#FFF0B6", imagem: require("../../assets/mula.png"), nome: "Volte duas casas" },
    { id: "4", cor: "#FFF0B6", imagem: require("../../assets/saci2.png"), nome: "Fique uma rodada sem jogar" },
    { id: "5", cor: "#FFF0B6", imagem: require("../../assets/boto.png"), nome: "Volte para o início" },
    { id: "6", cor: "#FFF0B6", imagem: require("../../assets/lanca.png"), nome: "Conte uma lenda ou mito em 30s" },
];

const Tela8 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const renderQuadrado = ({ item }: { item: QuadradoData }) => (
        <View style={styles.quadradoWrapper}>
            <TouchableOpacity
                style={[styles.quadrado, { backgroundColor: item.cor }]}
                onPress={() => console.log(`Clicou no quadrado ${item.id}`)}
            >
                <Image source={item.imagem} style={styles.imagemIcone} />
            </TouchableOpacity>
            <Text style={styles.textoBotao}>{item.nome}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/Background.png")}
                style={styles.ImageBackground}
            >
                <Image source={require("../../assets/Logo.png")} style={styles.logo} />
                <Image source={require("../../assets/planta2.png")} style={styles.planta} />

                <Text style={styles.titulo}>PRENDA</Text>
                <Text style={styles.subtitulo}>Escolha o ícone que saiu na roleta</Text>

                <FlatList
                    data={quadradosData}
                    renderItem={renderQuadrado}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.quadradoContainer}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageBackground: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 70,
        resizeMode: "contain",
        marginTop: 40,
    },
    titulo: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textDecorationLine: "underline",
        textDecorationColor: "red",
        marginTop: 30,
    },
    subtitulo: {
        color: "#fff",
        fontSize: 20,
        marginTop: 10,
        fontFamily: "sans-serif-light",
    },
    quadradoContainer: {
        marginTop: 40,
        paddingHorizontal: 10,
    },
    row: {
        justifyContent: "space-between",
        margin: 5,
    },
    quadradoWrapper: {
        alignItems: "center",
        margin: 10,
    },
    quadrado: {
        width: 100,
        height: 130,
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: 0.1,
        justifyContent: "center",
        alignItems: "center",
    },
    imagemIcone: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    textoBotao: {
        marginTop: 5,
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    planta: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        position: "absolute",
        top: 130,
        alignSelf: "center",
        left: 110,

    },
});

export default Tela8;

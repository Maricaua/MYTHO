import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";

const quadradosData = [
    { id: "1", cor: "#FFF0B6", imagem: require("../../assets/cuca.png"), nome: "Avance três casas" },
    { id: "2", cor: "#FFF0B6", imagem: require("../../assets/boto.png"), nome: "Jogue novamente" },
    { id: "3", cor: "#FFF0B6", imagem: require("../../assets/iara.png"), nome: "Avance duas casas" },
    { id: "4", cor: "#FFF0B6", imagem: require("../../assets/saci.png"), nome: "Avance uma casa" },
    { id: "5", cor: "#FFF0B6", imagem: require("../../assets/lobo.png"), nome: "O próximo jogador fica sem jogar" },
    { id: "6", cor: "#FFF0B6", imagem: require("../../assets/cachimbo.png"), nome: "Gire a roleta novamente" },
];

const Tela8 = () => {
    const renderQuadrado = ({ item }) => (
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

                <Text style={styles.titulo}>BÔNUS</Text>
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
        textDecorationColor: "blue",
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
        left: 130,

    },
});

export default Tela8;

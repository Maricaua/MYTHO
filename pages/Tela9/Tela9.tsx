import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from '../../App';
import { ref, set } from 'firebase/database'; // Importar ref e SET do Firebase

// Caminho de importação CONFIRMADO para o firebaseConfig.js
// Sobe dois níveis (de TelaX para MYTHO), e então entra na pasta src
import { db } from '../../src/firebaseConfig'; 

interface QuadradoData {
    id: string;
    cor: string;
    imagem: any;
    nome: string;
    valorBonificacao?: number;
}

const quadradosData: QuadradoData[] = [
    // Caminhos das imagens CONFIRMADOS: Sobe dois níveis (de TelaX para MYTHO), e então entra na pasta assets
    { id: "1", cor: "#FFF0B6", imagem: require("../../assets/cuca.png"), nome: "Avance três casas", valorBonificacao: 3 },
    // MODIFICAÇÃO AQUI: "Avance uma casa e jogue novamente" agora tem valorBonificacao: 1
    { id: "2", cor: "#FFF0B6", imagem: require("../../assets/boto.png"), nome: "Avance uma casa e jogue novamente", valorBonificacao: 1 },
    { id: "3", cor: "#FFF0B6", imagem: require("../../assets/iara.png"), nome: "Avance duas casas", valorBonificacao: 2 },
    { id: "4", cor: "#FFF0B6", imagem: require("../../assets/saci.png"), nome: "Avance uma casa", valorBonificacao: 1 },
    { id: "5", cor: "#FFF0B6", imagem: require("../../assets/lobo.png"), nome: "O próximo jogador fica sem jogar " },
    { id: "6", cor: "#FFF0B6", imagem: require("../../assets/cachimbo.png"), nome: "Gire a roleta novamente" },
];

const Tela9 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'Tela9'>>();
    const { selectedCasa } = route.params || { selectedCasa: null };

    const updateBonificacao = async (valor: number) => {
        if (selectedCasa === null) {
            Alert.alert("Erro", "Nenhuma casa selecionada. Volte e selecione uma casa.");
            return;
        }

        try {
            const dbRef = ref(db, `Disparos/Casa${selectedCasa}_Bonificacao`);
            await set(dbRef, valor); // Usando SET para sobrescrever o valor
        } catch (error) {
            console.error("Erro ao atualizar a bonificação no Firebase:", error);
            Alert.alert("Erro", "Não foi possível atualizar a bonificação. Verifique sua conexão ou as regras do Firebase.");
        }
    };

    const renderQuadrado = ({ item }: { item: QuadradoData }) => (
        <View style={styles.quadradoWrapper}>
            <TouchableOpacity
                style={[styles.quadrado, { backgroundColor: item.cor }]}
                onPress={() => {
                    if (item.valorBonificacao !== undefined) {
                        updateBonificacao(item.valorBonificacao);
                    }
                    console.log(`Clicou no quadrado ${item.id} - ${item.nome}`);
                }}
            >
                <Image source={item.imagem} style={styles.imagemIcone} />
            </TouchableOpacity>
            <Text style={styles.textoBotao}>{item.nome}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/Background.png")} // Este caminho já estava correto
                style={styles.ImageBackground}
            >
                <Image source={require("../../assets/Logo.png")} style={styles.logo} /> {/* Este caminho já estava correto */}
                <Image source={require("../../assets/planta2.png")} style={styles.planta} /> {/* Este caminho já estava correto */}

                {selectedCasa !== null && (
                    <Text style={styles.debugText}>Casa selecionada: {selectedCasa}</Text>
                )}

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
        left: 120,
    },
    debugText: {
        color: '#fff',
        fontSize: 14,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
});

export default Tela9;

import React from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Ionicons from '@expo/vector-icons/Ionicons';

type Tela7RouteProp = RouteProp<RootStackParamList, 'Tela7'>;

const Tela7 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<Tela7RouteProp>();

    const { selectedCasa } = route.params || { selectedCasa: null };

    const handleContinue = () => {
        if (selectedCasa === null) {
            Alert.alert("Erro", "Casa não selecionada. Por favor, volte e escolha uma casa novamente.");
            return;
        }

        Alert.alert(
            'Você já girou a roleta?',
            '',
            [
                {
                    text: 'Não',
                    style: 'cancel',
                    onPress: () => console.log('Usuário ainda não girou'),
                },
                {
                    text: 'Sim',
                    onPress: () => navigation.navigate('Tela8', { selectedCasa: selectedCasa })
                },
            ],
            { cancelable: false }
        );
    };

    return (
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
                    source={require('../../assets/prenda.png')}
                    style={styles.prenda}
                />

                {}
                {selectedCasa !== null && (
                    <Text style={styles.selectedCasaText}>Casa Selecionada: {selectedCasa}</Text>
                )}

                <TouchableOpacity
                    style={styles.continuar}
                    onPress={handleContinue} 
                >
                    <Text style={styles.texto}>Continuar</Text>
                </TouchableOpacity>

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
    prenda: {
        alignSelf: "center",
        top: 250,
        position: "absolute",
        resizeMode: "contain",
        width: 260,
    },
    continuar: {
        backgroundColor: "#930100",
        width: "80%",
        height: 50,
        marginTop: 20,
        borderRadius: 115,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        position: "absolute",
        shadowOpacity: 0.1,
        top: 670,
        zIndex: 10,
        left: "10%",
    },
    texto: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    back: {
        position: 'absolute',
        left: 20,
        top: 0,
        padding: 10,
        marginTop: 15,
        zIndex: 1,
    },
    selectedCasaText: { 
        position: 'absolute',
        top: 100, 
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        zIndex: 10,
    },
});

export default Tela7;

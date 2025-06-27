import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Tela13 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


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
                    source={require('../../assets/bonus.png')}
                    style={styles.bonus}
                />

                <TouchableOpacity
                    style={styles.continuar} onPress={() => navigation.navigate('Tela2')}>
                    <Text style={styles.texto}>Continuar</Text>
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
    bonus: {
        alignSelf: "center",
        top: 250,
        position: "absolute",
        resizeMode: "contain",
        width: 260,
    },
    continuar: {
        backgroundColor: "#001493",
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


});

export default Tela13;

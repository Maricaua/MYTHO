import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tela1 from "./Tela1"; // Importando a tela 1
import Tela2 from "./Tela2"; // Importando a tela 2

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

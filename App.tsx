import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './pages/Tela1/Tela1';
import Tela2 from './pages/Tela2/Tela2';
import Tela3 from './pages/Tela3/Tela3';
import Tela4 from './pages/Tela4/Tela4';
import Tela5 from './pages/Tela5/Tela5';
import Tela6 from './pages/Tela6/Tela6';
import Tela7 from './pages/Tela7/Tela7';
import Tela8 from './pages/Tela8/Tela8';
import Tela9 from './pages/Tela9/Tela9';
import Tela10 from './pages/Tela10/Tela10';
import Tela11 from './pages/Tela11/Tela11';
import Tela12 from './pages/Tela12/Tela12';
import Iara from './pages/Iara/Iara';
import Boitata from './pages/Boitata/Boitata';
import Boto from './pages/Boto/Boto';
import Cuca from './pages/Cuca/Cuca';
import Curupira from './pages/Curupira/Curupira';
import Mula from './pages/Mula/Mula';
import Saci from './pages/Saci/Saci';
import VitoriaRegia from './pages/VitoriaRegia/VitoriaRegia';


export type RootStackParamList ={
  Tela1: undefined;
  Tela2: undefined;
  Tela3: undefined;
  Tela4: undefined;
  Tela5: undefined;
  Tela6: undefined;
  Tela7: undefined;
  Tela8: undefined;
  Tela9: undefined;
  Tela10: undefined;
  Tela11: undefined;
  Tela12: undefined;
  Iara: undefined;
  Boitata: undefined;
  Boto: undefined;
  Cuca: undefined;
  Curupira: undefined;
  Mula: undefined;
  Saci: undefined;
  VitoriaRegia: undefined;
  

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Tela12" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="Tela6" component={Tela6} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="Tela9" component={Tela9} />
        <Stack.Screen name= "Tela10" component={Tela10}/>
        <Stack.Screen name= "Tela11" component={Tela11}/>
        <Stack.Screen name="Tela12" component={Tela12}/>
        <Stack.Screen name="Iara" component={Iara}/>
        <Stack.Screen name="Boitata" component={Boitata}/>
        <Stack.Screen name="Boto" component={Boto}/>
        <Stack.Screen name="Cuca" component={Cuca}/>
        <Stack.Screen name="VitoriaRegia" component={VitoriaRegia}/>
        <Stack.Screen name= "Saci" component={Saci}/>
        <Stack.Screen name="Curupira" component={Curupira}/>
        <Stack.Screen name="Mula" component={Mula}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

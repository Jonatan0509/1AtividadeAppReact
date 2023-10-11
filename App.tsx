import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const res = 2 + 2;
const vetor = [1, 2, 3, 5, 6, 7, 8, 9, 10];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>Bem-Vindo ao Meu App!</Text>
      <Text style={styles.secundText}>
        {"Esse app é pra dizer que 2+2 pode ser igual a "}
        {res} (as vezes não é)
      </Text>
      <Text style={styles.thirdText}>Vetor: {vetor.join(', ')}</Text>
      <Image source={require('../../../../Solução Mobile/Atividades/PrimeiraAtividade/PrimeiraAtividade/assets/mobile.png')} style={styles.mobile} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  firstText: {
    fontSize: 30,
  },
  secundText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  thirdText: {
    marginTop: 10,
    fontSize: 20,
  },
  mobile: {
    marginTop: 100,
    width: 250,
    height: 250,
  },
});
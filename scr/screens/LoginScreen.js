// Criado por: [Seu Nome Aqui]
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    if (!email || !senha) {
      alert('Erro', 'Preencha todos os campos');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TalkTudo</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={login} />
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Criar conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, textAlign: 'center', marginBottom: 20, color: '#1877F2' },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 10 },
  link: { marginTop: 10, textAlign: 'center', color: '#1877F2' }
});

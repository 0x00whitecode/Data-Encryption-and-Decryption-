import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { xorEncrypt, xorDecrypt, generateKey } from './utils/encryption';

const App = () => {
  const [plaintext, setPlaintext] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  // Generate a unique key based on time, date, and OS
  const secretKey = generateKey();

  const handleEncrypt = () => {
    const encrypted = xorEncrypt(plaintext, secretKey);
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = xorDecrypt(encryptedText, secretKey);
    setDecryptedText(decrypted);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.txt}>HNG Internship Task: inbuild Encryption</Text>
      <View style={styles.card}>
        <TextInput
          placeholder="Enter text to encrypt"
          value={plaintext}
          onChangeText={setPlaintext}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <Button title="Encrypt" onPress={handleEncrypt} color="#4CAF50" />
          <Button title="Decrypt" onPress={handleDecrypt} color="#FF9800" />
        </View>
        <Text style={styles.textLabel}>Encrypted Text:</Text>
        <Text style={styles.textInput}>{encryptedText}</Text>
        <Text style={styles.textLabel}>Decrypted Text:</Text>
        <Text style={styles.textInput}>{decryptedText}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  card: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  txt:{
    fontSize: 30,
    marginBottom: 20,
    color: 'blue',
  },
  buttonContainer: {
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  outputText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default App;

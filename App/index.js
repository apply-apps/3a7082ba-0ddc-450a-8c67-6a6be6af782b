// Filename: index.js
// Combined code from all files

// Filename begin: App.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const nextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.letterBox}>
          <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
        </View>
        <TouchableOpacity onPress={nextLetter} style={styles.button}>
          <Text style={styles.buttonText}>Next Letter</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#f0f8ff',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  letterBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#c0c0c0',
    padding: 50,
    marginVertical: 20,
  },
  letter: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  button: {
    backgroundColor: '#008000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
// Filename end: App.js
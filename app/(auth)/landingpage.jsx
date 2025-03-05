import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const LandingPage = () => {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How would you like to use our app?</Text>

      <Pressable style={styles.button} onPress={() => router.push("/signin")}>
        <Text style={styles.buttonText}>Personal</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/signin")}>
        <Text style={styles.buttonText}>Business</Text>
      </Pressable>
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

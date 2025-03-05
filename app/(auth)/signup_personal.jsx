import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Signup_personal = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </Pressable>

      {/* Name Input */}
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry />

      {/* Mobile Number Input */}
      <Text style={styles.label}>Mobile no.</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" />

      {/* Sign Up Button */}
      <Pressable style={styles.signUpButton}>
        <Text 
          style={styles.signUpButtonText} 
          onPress={() => router.push("/mainpage")}
        >Sign Up</Text>
      </Pressable>
    </View>
  );
};
export default Signup_personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#ddd',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

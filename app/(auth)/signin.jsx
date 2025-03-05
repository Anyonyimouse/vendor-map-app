import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const SignIn = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
         
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>{"<"}</Text>
          </Pressable>
    
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" />
        
        <Pressable onPress={() => router.push("/signup_personal")}>
        <Text style={styles.createAccount}>Create an account</Text>
        </Pressable>
         
    
          <Pressable style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      );
    };
    
    export default SignIn;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
      },
      backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        borderWidth:1,
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
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      createAccount: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 30,
        textDecorationLine: 'underline',
      },
      signInButton: {
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        alignSelf: 'center',
      },
      signInButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    
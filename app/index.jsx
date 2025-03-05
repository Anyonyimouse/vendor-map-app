import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NearSync!</Text>

      <Pressable 
        style={styles.button}
        onPress={() => router.push("/landingpage")}
      > 
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontSize: 24, 
    fontWeight: "bold",
  },

  button: {
    height: 40,
    width: 80,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  }
})

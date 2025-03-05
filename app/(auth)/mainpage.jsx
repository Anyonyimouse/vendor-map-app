import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Mainpage = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 14.9037221,
          longitude: 120.7889415,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Overlay Text */}
      <View style={styles.overlay}>
        <View style={{height: "100%", width: 40, backgroundColor: 'red'}}></View>
        <View style={{height: "100%", width: "50%", backgroundColor: 'red'}}></View>
        <View style={{height: "100%", width: 40, backgroundColor: 'red'}}></View>
      </View>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: "100%",
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20, // Adjust position as needed
    // left: 20, // Adjust position as needed
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional background
    // padding: 10,
    // borderRadius: 5,
  },
  overlayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

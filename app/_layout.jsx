import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function Root() {
  return (
    <View style={{ flex: 1 }}>asd
      <SafeAreaView style={{ flex: 1 }}>
        <Slot/>
      </SafeAreaView>
    </View>
  );
}

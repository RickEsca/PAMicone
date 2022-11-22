import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function AntDesing2() {
  return (
    <View style={styles.container}>
      <AntDesign name="frowno" size={50} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function Feather2() {
  return (
    <View style={styles.container}>
      <Feather name="eye" size={50} color="black" />
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

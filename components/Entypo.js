import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function Entypo2() {
  return (
    <View style={styles.container}>
      <Entypo name="emoji-neutral" size={50} color="black" />
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

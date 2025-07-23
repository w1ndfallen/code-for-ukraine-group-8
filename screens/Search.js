import {ImageBackground, StyleSheet, Text} from 'react-native';
import {View, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/fon.png')}
      style={styles.background}
      resizeMode="cover" >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
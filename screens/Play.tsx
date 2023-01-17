import React from 'react';
import {
  View,
  Text, 
  StyleSheet
} from 'react-native';
import PlayerSelector from '../components/PlayerSelector';

const Play = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Play;
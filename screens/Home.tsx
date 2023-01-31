import { StyleSheet, ImageBackground, Button, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PlayerSelector from '../components/PlayerSelector';
import { Text, View } from '../components/Themed';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        PixelShooter 2D
      </Text>

      <Button title="Store" onPress={() => navigation.navigate('Store')} />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />

      <PlayerSelector />


      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Text style={styles.play}>
          Play
        </Text>
      </TouchableOpacity>


      <Button title="Credits" onPress={() => navigation.navigate('Credits')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  play: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'yellow',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

import { StyleSheet, ImageBackground, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PlayerSelector from '../components/PlayerSelector';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PixelShooter 2D
      </Text>
      <Button title="Store" onPress={() => navigation.navigate('Store')}/>
      <Button title="Leaderboard"  onPress={() => navigation.navigate('Leaderboard')}/>
      
      <PlayerSelector/>
      
      <Button title="Play"  onPress={() => navigation.navigate('Play')}/>
      <Button title="Credits"  onPress={() => navigation.navigate('Credits')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

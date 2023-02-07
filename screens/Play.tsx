import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Game from '../components/Game';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const Play = () => {
  const [playable, setPLayable] = React.useState(false);

  function isLandscape() {
    const dim = screenDimensions
    return dim.width >= dim.height
  }

  const [dimensions, setDimensions] = React.useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  React.useEffect(() => {
    console.log('DATATATATTATATATTATAT')
    isLandscape()
    return () => { setPLayable(isLandscape()) }
  }, [dimensions])

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );

    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
      {playable && <Game/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF',
  }
});

export default Play;
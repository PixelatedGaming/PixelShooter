import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

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
      {playable ?
        <>
          {/* <Text style={styles.title}>Play</Text> */}
          {/* Joy stick */}
          {/* Player Sprite */}
          {/* Shoot Button */}

          <Text style={styles.header}>Window Dimensions</Text>
          {Object.entries(dimensions.window).map(([key, value]) => (
            <Text>
              "Balls"
            </Text>
          ))}

          <Text style={styles.header}>Screen Dimensions</Text>
          {Object.entries(dimensions.screen).map(([key, value]) => (
            <Text>
              "Balls"
            </Text>
          ))}
        </>
        :
        <Text> youre not in landscape {playable.toString()}</Text>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
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
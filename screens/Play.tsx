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
  function isLandscape() {
    const dim = screenDimensions
    return dim.width >= dim.height
  }

  const [dimensions, setDimensions] = React.useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  React.useEffect(() => {isLandscape()}, [dimensions])

  React.useEffect(() => {

    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );

    return () => subscription?.remove();
  });


  

  return (
    <View style={styles.container}>
      {isLandscape() ?
      <>
      <Text style={styles.title}>Play</Text>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
      </>
      :
      <Text> youre not in landscape {isLandscape().toString()}</Text>
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
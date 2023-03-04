import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function PlayScreen() {

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://elmarti.github.io/react-joystick-component/?path=/story/joystick-examples--default-joystick',
        }}
        style={{marginTop: 20}}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  devTextBold: {
    fontSize: 16,
    backgroundColor: 'black',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'right',
    textTransform: 'capitalize',
    color: 'white',
    width: '30%'
  },
  devTextLight: {
    height: 40,
    fontSize: 16,
    width: '50%',
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: '10%',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'lightblue'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

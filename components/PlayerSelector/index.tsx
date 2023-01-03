import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import PlayerOneGif from '../../assets/gifs/Player_One_Idle.gif'
import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

const PlayerOneGifUri = Image.resolveAssetSource(PlayerOneGif).uri


export default function PlayerSelector() {
    let [sprite, setSprite] = React.useState(0);

    function handleHelpPress() {
        setSprite(sprite++)

        // WebBrowser.openBrowserAsync(
        //     'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
        // );
    }

    return (
        <View style={styles.playerSelectorContainer}>
            <ImageBackground
                source={{ uri: PlayerOneGifUri }}
                resizeMode="cover"
                style={styles.image}
            >
                <Text
                    style={styles.helpLinkText}
                    lightColor={Colors.light.tint}
                >
                    Current Sprite is: Deez Nuts!
                </Text>




                <View style={styles.selector}>
                <Pressable onPress={handleHelpPress} 
                style={styles.helpLink}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {'< '}
                    </Text>
                </Pressable>

                <Pressable onPress={handleHelpPress} 
                style={styles.helpLink}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {' >'}
                    </Text>
                </Pressable>
            </View>




            </ImageBackground>

        </View>
    );
}



const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        // marginHorizontal: 50,
    },
    homeScreenFilename: {
        // marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        // paddingHorizontal: 4,
    },
    getStartedText: {
        //fontSize: 17,
        // lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        // marginTop: 15,
        // marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        // paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
        // paddingTop: 100,
        padding: 10,
        margin: 10,
        backgroundColor: 'green'
    },
    playerSpriteCanvas: {
        // height: '100%',
        // backgroundColor: "red",
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    selector: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '25%'
    },
    image: {
        // height: '70%'
    },
    playerSelectorContainer: {
        margin: 0,
        padding: 0
    }
});

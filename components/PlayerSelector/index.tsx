import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

export default function PlayerSelector() {
    let [sprite, setSprite] = React.useState(0);

    function handleHelpPress() {
        setSprite(sprite++)
    
        // WebBrowser.openBrowserAsync(
        //     'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
        // );
    }

    return (
        <>
            <View style={styles.playerSpriteCanvas}>
                <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                    Current Sprite is {sprite}
                </Text>
            </View>

            <View style={styles.selector}>
                <Pressable onPress={handleHelpPress} style={styles.helpLink}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {'< '}
                    </Text>
                </Pressable>

                <Pressable onPress={handleHelpPress} style={styles.helpLink}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {' >'}
                    </Text>
                </Pressable>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: 'green'
    },
    playerSpriteCanvas: {
        backgroundColor: 'violet',
        height: '50%',
        width: '50%',
    },
    selector: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5
    }
});

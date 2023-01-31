import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';


const AllSprites = [
    require('../../assets/gifs/Player_One_Idle.gif'),
    require('../../assets/gifs/Player_Two_Idle.gif')

]

const AllSpriteNames = [
    'Jake da Shooter',
    'Ella Criengo',
    'Olivia Cura'
]

export default function PlayerSelector() {
    let [sprite, setSprite] = useState(0);
    const [loading, setLoading] = useState(false);

    function handleRight() {
        setLoading(true)
        if (!AllSprites[sprite + 1]) {
            setSprite(0)
            setLoading(false)
        } else {
            setSprite(current => current + 1)
            setLoading(false)
        }
    }

    function handleLeft() {
        setLoading(true)
        if (!AllSprites[sprite - 1]) {
            setSprite(0)
            setLoading(false)
        } else {
            setSprite(current => current - 1)
            setLoading(false)
        }
    }

    return (
        <View style={styles.playerSelectorContainer}>

            {!loading &&
                <ImageBackground
                    source={{ uri: Image.resolveAssetSource(AllSprites[sprite]).uri }}
                    // resizeMode="cover"
                    style={styles.image}
                >
                    <Text
                        style={[styles.helpLinkText, { marginTop: 175 }]}
                        lightColor={Colors.light.tint}
                    >
                        Current Sprite is: {AllSpriteNames[sprite]}
                    </Text>


                </ImageBackground>
            }

            <View style={styles.selector}>
                <Pressable onPress={handleLeft}
                    style={[styles.helpLink, { margin: 1 }]}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {'< '}
                    </Text>
                </Pressable>

                <Pressable onPress={handleRight}
                    style={[styles.helpLink, { margin: 1 }]}>
                    <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        {' >'}
                    </Text>
                </Pressable>
            </View>
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
        marginTop: 50,
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
        paddingBottom: 0
    },
    image: {
        maxHeight: 300,
        height: 250
    },
    playerSelectorContainer: {
        margin: 0,
        padding: 0,
        // height: 300
    }
});

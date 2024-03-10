import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../Scripts/Scripts";

const MainScreen = () => {
    const removeKey = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log(`Key '${key}' removed successfully.`);
        } catch (error) {
            console.error(`Error removing key '${key}':`, error);
        }
    };

    const ButonPH = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, styles.whiteBorder]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    const ButonSR = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, styles.whiteBorder]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={require('../assets/images/background2.png')} style={styles.container}>
            <View style={styles.section}>
                <Image style={styles.logo} source={require('../assets/images/sidequest.png')} />
                <Text style={styles.description}>Your personal portal to self improvement</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.avatar} />
            </View>

            <View style={styles.barContainer}>
                <Text style={styles.healthText}>Health</Text>
                <View style={styles.bar2} />
                <View style={styles.bar} />
            </View>
            <View style={styles.barContainer2}>
                <Text style={styles.xpText}>Experience</Text>
                <View style={styles.bar3} />
                <View style={styles.bar4} />
            </View>

            <View style={styles.section}>
                <ButonPH title={'Personal Hub'} />
                <ButonSR title={'Settings'} />
                <ButonSR onPress={() => removeKey('userToken')} title={'Reminders'} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: '50%',
        width: '90%',
        resizeMode: 'contain',
        marginTop: 120,
    },
    description: {
        color: '#F8E559',
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 28,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        marginBottom: 20,
    },
    avatar: {
        borderRadius: 100,
        borderWidth: 10,
        borderColor: '#A955E6',
        backgroundColor: 'transparent',
        height: 160,
        width: 160,
        marginTop: 10,

    },

    barContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    bar: {
        backgroundColor: 'red',
        width: 250,
        height: 20,
        borderRadius: 10,
        marginTop: 20,
        position: 'absolute',
        zIndex: 2,
    },

    bar2: {
        backgroundColor: 'black',
        width: 260,
        height: 30,
        borderRadius: 10,
        marginTop: -30,
        position: 'absolute',
        zIndex: 1,
    },

    healthText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        marginBottom: 5,
        zIndex: 3,
    },

    xpText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginBottom: 5,
        zIndex: 3,
    },

    barContainer2: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    bar3: {
        backgroundColor: '#F8E559',
        width: 250,
        height: 20,
        borderRadius: 10,
        marginTop: 20,
        position: 'absolute',
        zIndex: 2,
    },

    bar4: {
        backgroundColor: 'black',
        width: 260,
        height: 30,
        borderRadius: 10,
        marginTop: -30,
        position: 'absolute',
        zIndex: 1,
    },

    buttonContainer: {
        backgroundColor: '#A955E6',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        elevation: 5,
        marginTop: 20,
    },


    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    whiteBorder: {
        borderColor: 'white',
        borderWidth: 3,
    },

});

export default MainScreen;

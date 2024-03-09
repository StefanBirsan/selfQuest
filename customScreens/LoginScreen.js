import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {auth} from "../Scripts/Scripts";
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email )
            })
            .catch(error => alert(error.message))
    };


    return (
        <KeyboardAvoidingView

            style={styles.container}

            behavior='padding'

        >
            <View style={styles.inputcontainer}>

                <TextInput

                    placeholder="Email"

                    value={email}
                    onChangeText={text => setEmail(text)}

                    style={styles.inpu}
                    autoCapitalize="none"
                >
                </TextInput>

                <TextInput

                    placeholder="Password"

                    value={password}
                    onChangeText={text => setPassword(text) }

                    style={styles.inpu}
                    secureTextEntry={true}
                    autoCapitalize="none"
                >
                </TextInput>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.buttos}
                    >
                        <Text style={styles.buttontext}> Login </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")
                        }
                        style={[styles.buttos, styles.buttonoutline]}
                    >

                        <Text style={styles.buttontext}> Register </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#332941'

    },

    inputcontainer: {
        width: '80%',
        padding: 15,
        borderRadius: 10,
    },

    buttos : {

        backgroundColor: '#F8E559',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',

    },

    buttontext : {

        color : 'black',
        fontWeight: '700',


    },

    buttonContainer : {

        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 32,

    },

    inpu: {

        paddingHorizontal: 15,
        backgroundColor: 'white',
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 5,
        padding: 15,
        borderRadius: 10,

    },

    buttonoutline: {

        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#864AF9',
        borderWidth: 4,

    },





});


export default LoginScreen;
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Login');
            }}>
            <View style={[styles.buttonContainer, { backgroundColor: '#F8E559' }]}>
                <Text style={styles.text}>Continue</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 120,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    text: {
        color: '#424769',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CustomButton;

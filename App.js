import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./customScreens/LoginScreen";
import MainScreen from "./customScreens/MainScreen";
import RegisterScreen from "./customScreens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./Scripts/Scripts";
import CarouselScreen from "./customScreens/CarouselScreen";
import TagScreen from "./customScreens/TagScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const TagStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'MainScreen'}
        >
            <Stack.Screen
                name="TagScreen"
                component={TagScreen}
                options={{
                    title: 'Tags',
                    headerShown: false,
                    headerTintColor: '#424769',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Why'}
        >
            <Stack.Screen
                name="Why"
                component={CarouselScreen}
                options={{
                    title: 'Why',
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#F8E559',
                    },
                    headerTintColor: '#3B3486',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#F8E559',
                    },
                    headerTintColor: '#424769',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'MainScreen'}
        >
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: 'Home',
                    headerShown: false,
                    headerTintColor: '#424769',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    const [isLogged, setIsLogged] = useState(true);
    const [hasTags, setHasTags] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
    }, []);

    useEffect(() => {
        const checkUserToken = async () => {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken === undefined) {
                return; // Exit the function if userToken is undefined
            }

            try {
                if (userToken === 'yes') {
                    setHasTags(true);
                } else {
                    setHasTags(false);
                }
            } catch (error) {
                // Handle the error, for example, by setting hasTags to false
                console.error('Error retrieving user token:', error);
                setHasTags(false);
            }
        };

        checkUserToken();
    }, []);

    return (
        <NavigationContainer>
            {!isLogged ? <AuthStack /> : !hasTags ? <TagStack /> : <AppStack />}
        </NavigationContainer>
    );
}

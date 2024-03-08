import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./customScreens/LoginScreen";
import MainScreen from "./customScreens/MainScreen";
import RegisterScreen from "./customScreens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "./Scripts/Scripts";

const Stack = createStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                title: 'Login',
                headerStyle: {
                    backgroundColor: '#F6B17A',
                },
                headerTintColor: '#424769',
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
                    backgroundColor: '#F6B17A',
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
                headerStyle: {
                    backgroundColor: '#F6B17A',
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


export default function App() {
    const [isLogged, setIsLogged] = useState(true);

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
    }, []);

  return (
      <NavigationContainer>
            {isLogged && <AppStack />}
            {!isLogged && <AuthStack />}
      </NavigationContainer>
  );
}



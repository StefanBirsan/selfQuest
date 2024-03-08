import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./customScreens/LoginScreen";
import MainScreen from "./customScreens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
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
      </NavigationContainer>
  );
}



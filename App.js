import 'react-native-gesture-handler';

// React and React Native Imports
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Context hooks
import { AppStateContext, AppStateProvider } from './contexts/AppState';
import { QueueStateProvider } from './contexts/QueueState';

// Screens
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import OtpScreen from './screens/OTPScreen';
import QueueInfoScreen from './screens/QueueInfo';
import SearchScreen from './screens/SearchScreen';
import SignupScreen from './screens/SignUp';

// Create Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function UnAuthenticatedApp() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Sign up" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

function AuthenticatedApp() {
  return (
    <QueueStateProvider>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </QueueStateProvider>

  )
}

function AppContent() {
  const [appState, setAppState] = useContext(AppStateContext);
  console.log(appState);

  return (
    <Stack.Navigator>
              {
          appState.isAuthenticated == false ? (
            <Stack.Screen
              name="StackLogin"
              component={UnAuthenticatedApp}
              options={{ headerShown: false }}
              />
          ) : (   
            <Stack.Screen
              name="StackHome"
              component={AuthenticatedApp}
              options={{ headerShown: false }}
            />
          )
        }
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="QueueInfo" component={QueueInfoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </AppStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

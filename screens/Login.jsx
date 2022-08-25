// React and React Native Imports
import { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

// Context Hooks
import { AppStateContext } from '../contexts/AppState';

export default function LoginScreen( { navigation } ) {
    const [appState, setAppState] = useContext(AppStateContext);
  return (
    <SafeAreaView style={styles.container}>
        <Text>Login Screen</Text>
        <Button 
            title="temp" 
            onPress={
                () => { 
                    setAppState({...appState, isAuthenticated: true}) 
                }
            }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

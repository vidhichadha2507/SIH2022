import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function SignupScreen( { navigation } ) {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Sign Up Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

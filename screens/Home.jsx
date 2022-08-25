import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function HomeScreen( { navigation } ) {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

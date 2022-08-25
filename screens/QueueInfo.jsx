// React and React Native Imports
import { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

// Import contexts
import { QueueStateContext } from '../contexts/QueueState';

export default function QueueInfoScreen( { route, navigation } ) {
    const {item, otherParams} = route.params;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}><Text>Expected waiting time:</Text></View>
            <View style={styles.textContainerRight}><Text style={styles.text}>{item.waitingTime} mins</Text></View>
        </View>
            
        <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}><Text>Estimated queue number:</Text></View>
            <View style={styles.textContainerRight}><Text style={styles.text}>{item.number}</Text></View>
        </View>  
     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  title: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    
  },

  textContainerLeft: {
    flex: 5,
    padding: 10,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "#FFF0F5",
    
  },

  textContainerRight: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "#FFF0F5",
  },
})

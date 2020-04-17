import React from 'react';
import { StyleSheet,TouchableOpacity, Image,Button, Text, View, TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions
const { heigh, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pravatar.cc/150?u=838433638',}}
        />
        <TextInput
          style={styles.simpleInput}
          placeholder="Name"
        />
        <TextInput
          style={styles.simpleInput}
          placeholder="Phone Number"
        />
        <TextInput
          style={styles.simpleInput}
          placeholder="Adress"
        />
        <TextInput
          style={styles.textAreaInput}
          placeholder="About Me"
          multiline = {true}
          numberOfLines = {4}
        />
        <TouchableOpacity
        style={styles.button}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  tinyLogo: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  simpleInput:{
    marginTop: 10,
    width: width -40,
    marginBottom: 30,
    height: 50,
    borderColor: '#FF80AB',
    borderWidth: 2,
    borderRadius: 7,
    paddingLeft: 15
  },
  textAreaInput: {
    width: width -40,
    marginTop: 10,
    height: 100,
    borderColor: '#FF80AB',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#FF80AB',
    borderRadius: 30,
    marginTop: 20,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btnText : {
    color: '#fff',
    fontSize: 20,
  }
});

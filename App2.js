import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'


export default function App() {
  const [text, setText] = useState('Intial Value Type Here to change')

  return (
    <View>
    <Text> Enter Text:</Text>
    <TextInput value={text}
        onChangeText={(newValue)=> setText(newValue)}
/>
    <Text> Text: {text}</Text>

  </View>
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
